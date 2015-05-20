/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

// this is far from perfect
var SH1Source = '!function(a,b){"function"==typeof define&&define.amd?define("strophe-sha1",function(){return b()}):a.SHA1=b()}(this,function(){function a(a,d){a[d>>5]|=128<<24-d%32,a[(d+64>>9<<4)+15]=d;var m,n,o,p,q,r,s,t,g=new Array(80),h=1732584193,i=-271733879,j=-1732584194,k=271733878,l=-1009589776;for(m=0;m<a.length;m+=16){for(p=h,q=i,r=j,s=k,t=l,n=0;80>n;n++)g[n]=16>n?a[m+n]:f(g[n-3]^g[n-8]^g[n-14]^g[n-16],1),o=e(e(f(h,5),b(n,i,j,k)),e(e(l,g[n]),c(n))),l=k,k=j,j=f(i,30),i=h,h=o;h=e(h,p),i=e(i,q),j=e(j,r),k=e(k,s),l=e(l,t)}return[h,i,j,k,l]}function b(a,b,c,d){return 20>a?b&c|~b&d:40>a?b^c^d:60>a?b&c|b&d|c&d:b^c^d}function c(a){return 20>a?1518500249:40>a?1859775393:60>a?-1894007588:-899497514}function d(b,c){var d=g(b);d.length>16&&(d=a(d,8*b.length));for(var e=new Array(16),f=new Array(16),h=0;16>h;h++)e[h]=909522486^d[h],f[h]=1549556828^d[h];var i=a(e.concat(g(c)),512+8*c.length);return a(f.concat(i),672)}function e(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function f(a,b){return a<<b|a>>>32-b}function g(a){for(var b=[],c=255,d=0;d<8*a.length;d+=8)b[d>>5]|=(a.charCodeAt(d/8)&c)<<24-d%32;return b}function h(a){for(var b="",c=255,d=0;d<32*a.length;d+=8)b+=String.fromCharCode(a[d>>5]>>>24-d%32&c);return b}function i(a){for(var d,e,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="",f=0;f<4*a.length;f+=3)for(d=(255&a[f>>2]>>8*(3-f%4))<<16|(255&a[f+1>>2]>>8*(3-(f+1)%4))<<8|255&a[f+2>>2]>>8*(3-(f+2)%4),e=0;4>e;e++)c+=8*f+6*e>32*a.length?"=":b.charAt(63&d>>6*(3-e));return c}return{b64_hmac_sha1:function(a,b){return i(d(a,b))},b64_sha1:function(b){return i(a(g(b),8*b.length))},binb2str:h,core_hmac_sha1:d,str_hmac_sha1:function(a,b){return h(d(a,b))},str_sha1:function(b){return h(a(g(b),8*b.length))}}});';
