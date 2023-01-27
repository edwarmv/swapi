let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/swapi
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +29 src/app/app.module.ts
badd +1 src/app/app.component.ts
badd +15 src/app/app.component.html
badd +2 src/styles.scss
badd +2 src/app/app.component.scss
badd +22 src/app/starship/starship.component.ts
badd +5 src/app/starship/starship.component.html
badd +37 src/app/starship/starship.component.scss
badd +26 src/app/starship/starship.module.ts
badd +1 ~/github/swapi/src/app/starship/starship.component.html
badd +0 ~/github/swapi/src/app/app.component.scss
badd +0 ~/github/swapi/src/app/app.component.ts
badd +1 ~/github/swapi/src/app/app.component.html
badd +0 ~/github/swapi/src/app/starship/starship.component.scss
badd +0 ~/github/swapi/src/app/starship/starship.component.ts
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/app/app.module.ts
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 29 - ((18 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 29
normal! 016|
tabnext
edit src/app/app.component.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 15 + 17) / 34)
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe '2resize ' . ((&lines * 15 + 17) / 34)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
exe 'vert 3resize ' . ((&columns * 72 + 72) / 145)
argglobal
balt src/app/app.component.scss
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 8 - ((4 * winheight(0) + 7) / 15)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 016|
wincmd w
argglobal
if bufexists(fnamemodify("~/github/swapi/src/app/app.component.scss", ":p")) | buffer ~/github/swapi/src/app/app.component.scss | else | edit ~/github/swapi/src/app/app.component.scss | endif
if &buftype ==# 'terminal'
  silent file ~/github/swapi/src/app/app.component.scss
endif
balt ~/github/swapi/src/app/app.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 7) / 15)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("~/github/swapi/src/app/app.component.html", ":p")) | buffer ~/github/swapi/src/app/app.component.html | else | edit ~/github/swapi/src/app/app.component.html | endif
if &buftype ==# 'terminal'
  silent file ~/github/swapi/src/app/app.component.html
endif
balt ~/github/swapi/src/app/app.component.scss
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
exe '1resize ' . ((&lines * 15 + 17) / 34)
exe 'vert 1resize ' . ((&columns * 72 + 72) / 145)
exe '2resize ' . ((&lines * 15 + 17) / 34)
exe 'vert 2resize ' . ((&columns * 72 + 72) / 145)
exe 'vert 3resize ' . ((&columns * 72 + 72) / 145)
tabnext
edit ~/github/swapi/src/app/starship/starship.component.html
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("~/github/swapi/src/app/starship/starship.component.scss", ":p")) | buffer ~/github/swapi/src/app/starship/starship.component.scss | else | edit ~/github/swapi/src/app/starship/starship.component.scss | endif
if &buftype ==# 'terminal'
  silent file ~/github/swapi/src/app/starship/starship.component.scss
endif
balt ~/github/swapi/src/app/starship/starship.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
2wincmd w
wincmd =
tabnext 3
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
