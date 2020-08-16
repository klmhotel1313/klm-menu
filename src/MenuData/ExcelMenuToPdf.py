import pandas as pd
import json

excel_data_df = pd.read_excel('Menu.xlsx',sheet_name=None);
menu_data={}
for i in excel_data_df:
	json_data=excel_data_df[i].to_json(orient='records')
	menu_data[i]=json.loads(json_data)
	

with open('data.json', 'w') as outfile:
    json.dump(menu_data,outfile,indent=4,ensure_ascii=False)	
	