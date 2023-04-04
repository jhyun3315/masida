from fastapi import FastAPI
from starlette.requests import Request

app = FastAPI()


@app.post("/recommend")
async def assosiateion(request: Request):

    req = await request.json()
    print(req)
    print(">>>>>>>>")
    # k = int(list(req.keys())[0])
    # v = list(req.values())[0]


    return None
