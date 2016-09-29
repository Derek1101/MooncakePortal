from django import forms

class PNGForm(forms.Form):
    docfile = forms.FileField(
        label = "Select a PNG image"    
    )