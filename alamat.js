function tampilkan(){
 
  var nama_kota=document.getElementById("form1").select1.value;
  var p_kontainer=document.getElementById("container");
 
  if (nama_kota=="Jakarta")
    {
        p_kontainer.innerHTML="Gratis Ongkir Service";
    }
  else if (nama_kota=="Bandung")
    {
        p_kontainer.innerHTML="Kena Biaya Ongkir Service";
    }
  else if (nama_kota=="Bogor")
    {
        p_kontainer.innerHTML="Gratis Ongkir Service";
    }
    else if (nama_kota=="Banten")
    {
        p_kontainer.innerHTML="Kena Biaya Ongkir Service";
    }
    else if (nama_kota=="Depok")
    {
        p_kontainer.innerHTML="Gratis Ongkir Service";
    }
}