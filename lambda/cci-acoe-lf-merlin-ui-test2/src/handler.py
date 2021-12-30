import json

def main(event, context):

    return {
        'statusCode': 200,
        'body': json.dumps("Hello {} it's nice to meet you. ".format(event.get("name", "[null]")))
    }