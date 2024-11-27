import numpy
import pandas as pd
from modifiers import lemmatize
from os import environ
from transformers import AutoTokenizer


class TextEvaluated:
    contains: str
    classes: list[str]  # reserved for model
    certainty: list[float]  # reserved for model

    def __init__(self, text):
        self.contains = text

    def add_to_df(self, data, dataframe):

        csv_switch = False  # switch whether to write to csv or not, mostly for debug

        tokenizer = AutoTokenizer.from_pretrained("bert-base-multilingual-cased")
        to_toketise = tokenizer(lemmatize(data.lower()))

        new_data = [data, data.lower(), to_toketise]
        print(to_toketise)
        for i in range(2, len(dataframe)):
            new_data.append(0)

        dataframe = dataframe._append(pd.Series(new_data, index=dataframe.columns[:len(new_data)]), ignore_index=True)

        # dataframe.index += 1
        if csv_switch:
            from os import environ
            dataframe.to_csv(f"{environ['USERPROFILE']}/rash/1523_movetone/src/api/ds/test.csv")
            # todo - move path to __init__ configs
        return dataframe

# df = pd.read_csv(f"{environ['USERPROFILE']}/rash/1523_movetone/src/api/ds/test.csv", index_col=0)

# testval = TextEvaluated
# testval.__init__(testval,
# text="пакет библиотек и программ для символьной и статистической обработки естественного языка, написанных на")
# print(testval.add_to_df(testval, testval.contains, df))
