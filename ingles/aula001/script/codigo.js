function la() {
    let letter_a = window.document.querySelector("audio#letter_a")
    letter_a.play()
}

function lb() {
    let letter_b = window.document.querySelector("audio#letter_b")
    letter_b.play()
}

function lc() {
    let letter_c = window.document.querySelector("audio#letter_c")
    letter_c.play()
}

function ld() {
    let letter_d = window.document.querySelector("audio#letter_d")
    letter_d.play()
}
  
  function le() {
    let letter_e = window.document.querySelector("audio#letter_e")
    letter_e.play()
}
  
  function lf() {
    let letter_f = window.document.querySelector("audio#letter_f")
    letter_f.play()
}
  
  function lg() {
    let letter_g = window.document.querySelector("audio#letter_g")
    letter_g.play()
}
  
  function lh() {
    let letter_h = window.document.querySelector("audio#letter_h")
    letter_h.play()
  }
  
  function li() {
    let letter_i = window.document.querySelector("audio#letter_i")
    letter_i.play()
  }
  
  function lj() {
    let letter_j = window.document.querySelector("audio#letter_j")
    letter_j.play()
  }
  
  function lk() {
    let letter_k = window.document.querySelector("audio#letter_k")
    letter_k.play()
  }
  
  function ll() {
    let letter_l = window.document.querySelector("audio#letter_l")
    letter_l.play()
  }
  
  function lm() {
    let letter_m = window.document.querySelector("audio#letter_m")
    letter_m.play()
  }
  
  function ln() {
    let letter_n = window.document.querySelector("audio#letter_n")
    letter_n.play()
  }
  
  function lo() {
    let letter_o = window.document.querySelector("audio#letter_o")
    letter_o.play()
  }
  
  function lp() {
    let letter_p = window.document.querySelector("audio#letter_p")
    letter_p.play()
  }
  
  function lq() {
    let letter_q = window.document.querySelector("audio#letter_q")
    letter_q.play()
  }
  
  function lr() {
    let letter_r = window.document.querySelector("audio#letter_r")
    letter_r.play()
  }
  
  function ls() {
    let letter_s = window.document.querySelector("audio#letter_s")
    letter_s.play()
  }
  
  function lt() {
    let letter_t = window.document.querySelector("audio#letter_t")
    letter_t.play()
  }
  
  function lu() {
    let letter_u = window.document.querySelector("audio#letter_u")
    letter_u.play()
  }
  
  function lv() {
    let letter_v = window.document.querySelector("audio#letter_v")
    letter_v.play()
  }
  
  function lw() {
    let letter_w = window.document.querySelector("audio#letter_w")
    letter_w.play()
  }
  
  function lx() {
    let letter_x = window.document.querySelector("audio#letter_x")
    letter_x.play()
  }
  
  function ly() {
    let letter_y = window.document.querySelector("audio#letter_y")
    letter_y.play()
  }
  
  function lz() {
    let letter_z = window.document.querySelector("audio#letter_z")
    letter_z.play()
  }





function verde() {

    let valores = [2, 7, 9, 20, 1, 11, 16, 54, 8, 10, 2, 6, 12, 2, 4];

    for (let i = 1; i <= 15; i++) {
        let res = document.getElementById(`res${i}`);

        if (res.value == valores[i - 1]) {
            res.style.border = "5px solid #31FF4E";
        } else {
            res.style.border = "none";
        }
    }
    
}

