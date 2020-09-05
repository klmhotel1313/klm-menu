import pandas as pd
import json

excel_data_df = pd.read_excel('src/MenuData/Menu.xlsx',sheet_name=None);
menu_data={}
for i in excel_data_df:
	json_data=excel_data_df[i].to_json(orient='records')
	menu_data[i]=json.loads(json_data)

new_list=[]
for key in menu_data.keys():
	for index,i in enumerate(menu_data[key]):
		new_dict = dict((k.lower().strip(), v) for k, v in i.items())
		menu_data[key][index]=new_dict;
		
		
with open('src/MenuData/data.json', 'w') as outfile:
    json.dump(menu_data,outfile,indent=4,ensure_ascii=False)	
	