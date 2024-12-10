from multiprocessing import Pool
from time import time

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np
import csv
from ..api.logs import log

tags_dict = {"фильмы": "", "литература": "", "музыка": "", "анекдоты": "",
             "игроновости": "", "скидки": "", "фэндомы": "", "обсуждения": "",
             "рецепты": "", "обзоры": "", "отзывы": "", "рекомендации": "",
             "задания": "", "новости": "", "факты и открытия": "", "теория": "",
             "дайджесты": "", "криминалистика": "", "актеры": "", "политика": "",
             "погода": "", "соцсети": "", "истории жизни": "", "чего": ""}
tags = list(tags_dict.keys())

texts = []
labels = []

with open("data.csv", mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        if not (row["tags"]):
            continue
        texts.append(row["text"])
        labels.append(row['tags'])

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3, random_state=42)
model = LogisticRegression(max_iter=50000, solver='lbfgs', multi_class='multinomial')
model.fit(X_train, y_train)


async def analyse(t: list[str]):
    resp = []
    for i in range(len(t)):
        text = t[i]

        X_test = vectorizer.transform([text])
        eval_text = model.predict(X_test)[0]
        eval_text = eval_text[1:]
        resp.append(eval_text)

    return resp
