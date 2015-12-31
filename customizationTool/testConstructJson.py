from customizationTool.jsonModel import construct_json
import sys, traceback

def test():
    file = open("C:/Users/Administrator/Documents/GitHub/MooncakePortal/customizationTool/modified.txt", "r")
    filenames = file.readlines()
    file.close()
    output = open("C:/Users/Administrator/Documents/GitHub/MooncakePortal/customizationTool/error.txt", "w")
    for filename in filenames:
        print("processing: "+filename)
        construct_json(filename.strip())
        try:
            construct_json(filename.strip())
        except:
            ex_type, ex, tb = sys.exc_info()
            trace = traceback.format_tb(tb)
            output.writelines(["processing: "+filename+"\n"])
            output.writelines(trace)
            output.writelines([str(ex)+"\n", "\n"])