export default function getEnv() {
  let env = 'http://39.108.178.7:8080'
  let kidsEnv = 'http://ip.web.dev.kimed.me:8014'
  let appid = 'wx40e071aa57867de7'
  let useLocalToken = false
  let qrcodeImgProd = false
  let mapPath = {}
  let mapDev = {
    "tbbwfa001": "/tbbwfa001",
    "exet": "/yian001",
    "sebxb": "/yian001",
    "tbbwyl001": "/tbbwyl001",
    "tbsjbb001": "/tbsjbb001",
    "tbtzx001": "/tbtzx001",
    "ycwy": "/yian001",
    "ymwy": "/yian001",
  }
  let mapTest = {
    "tbbwfa001": "/tbbwfa001",
    "exet": "/yian001",
    "sebxb": "/yian001",
    "tbbwyl001": "/tbbwyl001",
    "tbsjbb001": "/tbsjbb001",
    "tbtzx001": "/tbtzx001",
    "ycwy": "/yian001",
    "ymwy": "/yian001",
  }
  let mapProd = {
    "tbbwfa001": "/tbbwfa001",
    "exet": "/yian001",
    "sebxb": "/yian001",
    "tbbwyl001": "/tbbwyl001",
    "tbsjbb001": "/tbsjbb001",
    "tbtzx001": "/tbtzx001",
    "ycwy": "/yian001",
    "ymwy": "/yian001",
  }
  let wxauthPath = 'test-wxauth.360has.com'
  let redirectUrl = 'http://ip.web.dev.kimed.me:8017'
  if (process.env.NODE_ENV == 'development') {
    env = 'http://39.108.178.7:8080'
    kidsEnv = 'http://ip.web.dev.kimed.me:8014'
    appid = 'wx40e071aa57867de7'
    useLocalToken = true
    qrcodeImgProd = false
    mapPath = mapDev
  } else if (process.env.NODE_ENV == 'production') {
    env = 'http://120.78.234.124:8080'
    kidsEnv = 'http://tmp.kimed.me'
    appid = 'wxfd22e48f7abea6e7'
    useLocalToken = false
    qrcodeImgProd = true
    mapPath = mapProd
    wxauthPath = 'wxauth.360has.com'
    redirectUrl = 'http://insurmall.kimed.me'
  } else if (process.env.NODE_ENV == 'testing') {
    env = 'http://39.108.178.7:8080'
    kidsEnv = 'http://ip.web.dev.kimed.me:8014'
    appid = 'wx40e071aa57867de7'
    useLocalToken = false
    qrcodeImgProd = false
    mapPath = mapTest
  }
  return {
    env,
    appid,
    useLocalToken,
    mapPath,
    wxauthPath,
    redirectUrl,
    qrcodeImgProd,
    kidsEnv
  }
}