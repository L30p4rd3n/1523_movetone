from fastapi import FastAPI, Request
from pydantic import BaseModel
from .db import main
from .logs import log

class ParamData():
    _id: int
    # probably, some other structure data of the application

    def __init__(self):
        self._id = 1


app = FastAPI()
params = ParamData()


class Data(BaseModel):
    id: int
    text: str


@app.post('/', status_code=200)
async def root(text: Data):
    #await log(text.text)
    await main.write(text.text)
    params._id += 1
    return text
