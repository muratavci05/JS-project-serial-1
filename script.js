/* Basit slider kodları, images içindeki resimler picsum sitesinden alıntı yapılmıştır  */

var i = 0;
var images = ['https://picsum.photos/400/400/','https://picsum.photos/500/400','https://picsum.photos/400/400'];

var duration =1000;

function slideImg() {
    document.slide.src = images[i];

    if (i<images.length -1) {
        
        i++;

    } else {

        i = 0;
    }

    setTimeout("slideImg ()",duration);
    
}

window.onload = slideImg;
