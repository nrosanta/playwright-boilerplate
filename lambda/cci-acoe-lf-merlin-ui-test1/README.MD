# Launch EMR Lambda Function
This function will retrieve the status of the EMR cluster specified in the even passed to it. This function is also compatable with Step Function and if presented with a TaskToken from Step Function it will implement the Boto3 Step Function client to report it's success and/or failure to the calling State Machine. 

## Example Event:
```
{
    "JobFlowId" : "insert job flow id here"
}
```

## Full List of Options:
|Option|Required?|Default Value|Description|
| ---- | ------- | ----------- | ------------- |
|JobFlowId|Yes||The id of the EMR Cluster |
|retryCounter|No||This value if present will just be passed through to the output |
|retryFunction|No||This value if present will just be passed through to the output |
|retryMax|No||This value if present will just be passed through to the output |
|TaskToken|No||Token passed by Step Function State Machine for callbacks |


