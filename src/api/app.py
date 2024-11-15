from fastapi import FastAPI

app = FastAPI()


# reformat the routes to different file
@app.get('/', status_code=200)
async def root():
    return {"baza":"priem"},
