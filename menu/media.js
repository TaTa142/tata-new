const a = '```'
const mediaa = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭─────≽「 *MEDIA MENU & DOWNLOAD* 」
┴
┠≽ *${prefix}tiktokstalk [username]*
┠≽ *${prefix}igstalk [fjr_hsb]*
┠≽ *${prefix}tiktoksearch [dayana]*
┠≽ *${prefix}instavid [link valid]*
┠≽ *${prefix}instaimg [link valid]*
┠≽ *${prefix}instastory [username]*
┠≽ *${prefix}ssweb [url]*
┠≽ *${prefix}url2img [url]*
┠≽ *${prefix}tiktok*
┠≽ *${prefix}fototiktok*
┠≽ *${prefix}kbbi*
┠≽ *${prefix}wait*
┬
╰────────────────────────
`
 }

exports.mediaa = mediaa