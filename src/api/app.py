from fastapi import FastAPI, Request
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

from .ds import main
from .logs import log


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


class Data(BaseModel):
    text: str


@app.post('/', status_code=200)
async def root(text: Data):
    print(text.text)
    #await log(text.text)
    ds = main.TextEvaluated
    ds.__init__(main.TextEvaluated, text=text)
    ds.add_to_df(ds, text.text, main.df)
    response = ""
    await log(main.df)

    return {"text": f"{response}"}  # able to return any response
