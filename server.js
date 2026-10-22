// Zero-dependency static server. Run: node server.js   (PORT env var optional, default 8080)
const http=require("http"),fs=require("fs"),path=require("path"),zlib=require("zlib");
const T={".html":"text/html; charset=utf-8",".js":"text/javascript",".webmanifest":"application/manifest+json",".png":"image/png",".svg":"image/svg+xml",".json":"application/json"};
http.createServer((q,s)=>{let p=decodeURIComponent(q.url.split("?")[0]);if(p.endsWith("/"))p+="index.html";
const f=path.join(__dirname,path.normalize(p));if(!f.startsWith(__dirname)||/server\.js|package\.json/.test(f)){s.writeHead(403);return s.end()}
fs.readFile(f,(e,b)=>{if(e){s.writeHead(404);return s.end("Not found")}
const h={"Content-Type":T[path.extname(f)]||"application/octet-stream","Cache-Control":/sw\.js$|\.html$/.test(f)?"no-cache":"public,max-age=86400"};
if(/gzip/.test(q.headers["accept-encoding"]||"")&&/html|js|json|webmanifest/.test(h["Content-Type"])){h["Content-Encoding"]="gzip";b=zlib.gzipSync(b)}
s.writeHead(200,h);s.end(b)})}).listen(process.env.PORT||8080,()=>console.log("AeroPuff running on http://localhost:"+(process.env.PORT||8080)));
