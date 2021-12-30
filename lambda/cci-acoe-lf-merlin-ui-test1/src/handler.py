import json
import os

def main(event, context):

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda! Region: {}'.format(os.environ['AWS_REGION']))
    }