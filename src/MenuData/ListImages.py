import os
import json
arr = os.listdir('./images')
with open('imagesList.json', 'w') as outfile:
    json.dump(arr,outfile,indent=4,ensure_ascii=False)