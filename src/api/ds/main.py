import pandas as pd


# class Text:
#     contain: str

def replacement(text):
    for ch in ['`', '*', '_', '{', '}', '[', ']', '(', ')', '>', '#', '+', '-', '.', '!', '$', ',', "?", '"', "'", "@",
               "%", ":", ";"]:
        if ch in text:
            text = text.replace(ch, "")
    return text


#stole this(^) from here https://stackoverflow.com/questions/3411771/best-way-to-replace-multiple-characters-in-a-string
# credits to them as i am a lazy man to manually do this

class TextEvaluated:
    contains: str
    classes: list[str]
    certainty: list[float]

    def __init__(self, text):
        self.contains = text

    def add_to_df(self, data, dataframe):

        csv_switch = True  # switch whether to write to csv or not, mostly for debug

        new_data = [data, data.lower(), replacement(data)]
        for i in range(2, len(dataframe.columns) - 1):
            new_data.append(0)  # zeros to label the data, todo: probably, change to NaN instead
        dataframe.loc[-1] = new_data
        dataframe.index += 1

        if csv_switch:
            from os import environ
            dataframe.to_csv(f"{environ['VIRTUAL_ENV']}/1523_movetone/src/api/ds/test.csv")
            # todo - move path to __init__ configs
        return dataframe


df = pd.DataFrame([], columns=["text", "text_lower", "text_lower_nospecial" 'фильмы', 'музыка', 'литература',
                               'анекдоты', 'игроновости', 'скидки', 'фэндомы', 'обсуждения', 'обзоры', 'рецепты',
                               'отзывы', 'рекомендации', 'задания',
                               'новости', 'факты и открытия', 'теория', 'дайджесты', 'криминалистика', 'актеры',
                               'политика', 'погода', 'соцсети', 'истории жизни'])

testval = TextEvaluated
testval.__init__(testval, text="lorem, ipsum")
testval.add_to_df(testval, testval.contains, df)

print(df)
df.to_csv("test.csv")
