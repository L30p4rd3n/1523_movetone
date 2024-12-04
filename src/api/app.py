from fastapi import FastAPI, Response
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from ..ai.MNL import analyse
from .logs import log

import ultraimport

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_credentials=False,
    allow_headers=['*']
)


class PublicPosts(BaseModel):
    #__public_id__: str
    data: list[str]
    #__ids__: list[str]


@app.post("/public-post", status_code=201)
async def public(text: PublicPosts):
    # id = text.__public_id__
    textList = text.data
    # textIDs = text.__ids__

    tl = await analyse(textList)
    await log(tl)

    # for i in range(len(textList)):
    #   analyse(textList[i])
    return {}
