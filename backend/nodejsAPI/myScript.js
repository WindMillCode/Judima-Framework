const jws = require('jws')


console.log(jws)

var nowTime =   Date.now()/1000
var expTime =  nowTime + 120
var jwt = {
    header:{"alg":"RS256","typ":"JWT"},
    // base64 eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9
    claims:{
        "iss": "hubspotclientmediator@quickstart-1589660299109.iam.gserviceaccount.com",
        "scope": "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets",
        "aud": "https://oauth2.googleapis.com/token",
        "exp": expTime,
        "iat": nowTime
      }
}





const signature = jws.sign({
    header: jwt.header,
    payload: JSON.stringify(jwt.claims),
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCyPlhbaNdmz4bP\nwL9e6scKepA+lrCDV1aC2n71pzhKZKeKdX+tBW/il1hnhPAkfe5Ly7oXmgUWxWOi\nAoZjvp+VIe97SUlOT5xO/aDuWY77VmHpwU3e56RXRmj4jWJ3TkE4OexzhWzqeLtR\njsetZM9ctvLADF8axxMruNaplXR6HfSpQlAgQveiG0ubVUZqQLI14snu5o4VDX9D\n3BcSAzQbk0WWzjYsae+cK9RDLeLTtmotMSUqOlpB1ZNWVz69ancWBpewa3DCRaPX\ntZzwZX5ffK3iuZEMNReCWcTfHL+DdcfRpGaKpc7vO7sgzvbRu9jsm4iSVE/4Skkk\nOfnx/Q7TAgMBAAECggEADLC3pbpvK5i25m+4sE9S4IIdZvdfldpQBHz98Qt4zIMi\nEo+PCYiLkLxpxOUIG/EDWE4m76s9lYN0NoKrgsp9niaOYF61Y2fznwQbwxyJO4fI\n7NWgb7BaWQRgUOHwEsJ1jkVBenATcxYpcAMUYFn/EYDNA7NdyhBGYySD1AsaAd+l\ndJ8CREhVR0KZJGPC6JOU3Z2SF5o4oESUZzriPFhhQz0bG1SBALsVwS+JIZiJ2KO6\nSp20e/e5Lc5ayphaEBeRDgQ8OTDPCB3oAE9lpejzsqcPVmizqya4off4n9Bpcqin\nxtcfRC3V3ddr0zG/hJDxFza1keMTY6IrO7rOGFAVAQKBgQDyYGsgk7chpyx8OE0y\n+vhvMCcyQsV44YfmsIERKk1FIwd8DTX/sRAy4MHbqlbvGgwMjDc9rY32hgKuPSuo\nGu/YAk3ZJlF0u3mLO3s3LWi4kKJDSjJdmzsRW6lQq8w95zrMkgCI4Tqe5sSiFwbd\nMGj50iCO8x7UgQx87rO5EXQ0QQKBgQC8QxvwDeKL707pVrE1Up2pjeI7w5gglhpa\nXoE9CCgvEviCvNweDdXQsCaUWfuF0iidJMMWsFhGBc6xQPCEgUBKt7J5/V7+D4Yx\nEXPl9ttTmc/iAtqzgRXoREiB0ZkUCoDbBAHmCiPcU6tY+h0aDUXVHAcOqEf05d+a\nEWvRcJmuEwKBgGmPoriifQz0IUTMxJqigZbzcu7J8/VszGKlluDh+ptU4Uqe+lit\nRi/SgbvpGUmzn3HLk7eSIhUvUnWOgLgLW1BJ2Jvtu2ZKzGnecxCZ/1T68SC7bOol\n1Hj/4eMXn7GKRqqYIBF9fql8OkGaI8wr7Fx5ruJzcob82XKEB9RfjKvBAoGARo3b\n/YYmngzshPRRa0tv/OhInd86txOqAq4iPy48aQ/yBIUk9Tp4JEKv4q8qXUeaovHx\nDyK9olhw0uskeHQ8FQRtJdy36f0FbIQ+7DMslVMynmA1eEprXGWiyswzU1hwXCRP\nVdf9Aoh00d7CY04QGsLrPioA9Z3kw8e9oXtSjPMCgYBwnlijsySWE2iU+8/b3xMC\nDQqd/6KQE7oRmWbqVAiZo6Da2+W810s/xCwlodvGkuwK2W7ZxmD0vYi/iB5rlsMr\nFcJjCGr3W4Tpdjh8LHI24fLwd4aMDHWQG09MHpAeMaP4Yk/xUUF851L1/q/0kSqq\n17Y7jmWQ/0hQJLzdlatL5g==\n-----END PRIVATE KEY-----\n",
});

console.log(signature)
  

