FROM python:3.10
WORKDIR /home/fast
COPY . .

RUN pip freeze > requirements.txt
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0,0,0,0", "--port", "8000"]
