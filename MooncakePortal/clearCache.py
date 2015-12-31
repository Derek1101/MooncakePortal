from django.core.cache import get_cache, DEFAULT_CACHE_ALIAS
from django.utils.cache import get_cache_key, _generate_cache_header_key, _generate_cache_key
from django.core.urlresolvers import reverse
from django.http import HttpRequest
from django.conf import settings
import socket


def expire_cache(path, args=[], GET={}, HOSTNAME="127.0.0.1:8000", cache_name=None, isview=True, lang_code=None, method='GET'):
    if cache_name is None:
        cache_name = DEFAULT_CACHE_ALIAS
    cache = get_cache(cache_name)
    key_prefix = settings.CACHE_MIDDLEWARE_KEY_PREFIX
    print(key_prefix)
    request = HttpRequest()
    fake_meta = {'HTTP_HOST':HOSTNAME,}
    print(fake_meta['HTTP_HOST'])
    request.META = fake_meta
    request.GET = GET
    if isview:
        request.path = reverse(path, args=args)
    else:
        request.path = path

    language_code = lang_code or getattr(settings, 'LANGUAGE_CODE')
    if language_code:
        request.LANGUAGE_CODE = language_code

    header_key = _generate_cache_header_key(key_prefix, request)

    if not header_key:
        return False

    print(header_key)
    headerlist = cache.get(header_key, None)
    print(headerlist)
    if headerlist is not None:
        cache.set(header_key, None, 0)
        page_key = _generate_cache_key(request, method, headerlist, key_prefix)

        if not page_key:
            return False
        print(cache.get(page_key))
        cache.set(page_key, None, 0)
    return True
