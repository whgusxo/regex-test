const str = `
010-1234-5678
whgusxo3115@naver.com
http://www.naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/(?<=@).{1,}/g))