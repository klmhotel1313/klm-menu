import os
import json
arr = os.listdir('src/MenuData/images')
with open('src/MenuData/imagesList.json', 'w') as outfile:
    json.dump(arr,outfile,indent=4,ensure_ascii=False)