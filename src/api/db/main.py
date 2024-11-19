import sqlalchemy as db
from sqlalchemy import Column, Integer, String, MetaData
from sqlalchemy.orm import declarative_base, sessionmaker

from ..logs import log

base = declarative_base()
engine = db.create_engine("sqlite:///data.sqlite")
metadata = MetaData()


class Classes(base):
    __tablename__ = "classes"
    id = Column(Integer, primary_key=True)
    classname = Column(String())


class Text(base):
    __tablename__ = "texts"
    id = Column(Integer, primary_key=True)
    text = Column(String())
def _create():
    return base.metadata.create_all(engine)


_create()
Session = sessionmaker(bind=engine)
session = Session()  # add pooling - later


async def write(data):
    text = Text(text=data)
    # await log(text.text)
    session.add(text)
    session.commit()

# do whatever we need
