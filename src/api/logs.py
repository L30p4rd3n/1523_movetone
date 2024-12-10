import logging, datetime
from os import environ

filename = f'{environ["USERPROFILE"]}/movetone/1523_movetone/logs/{datetime.date.today()}.log'
logging.basicConfig(filename=filename,
                        level=logging.NOTSET, format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s',
                        filemode="a")

logger = logging.getLogger(__name__)

logger.info("")
async def log(message, *messages):
    return logger.info(message, *messages) # todo: reformat for different logging levels

