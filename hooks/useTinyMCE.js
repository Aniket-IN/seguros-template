import React from "react";

const useTinyMCE = () => {
  const apiKey = "p4g8wd4vf0rb9eex4lrwhii4erz2tidhq0q77y19v7osjheq";

  const config = {
    fullFeatured: {
      relative_urls: false,
      remove_script_host: false,
      convert_urls: true,
      height: 500,
      toolbar_sticky: false,
      image_caption: true,
      plugins:
        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons",
      menubar: "file edit view insert format tools table help",
      toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
      toolbar_mode: "sliding",
      contextmenu: "link image imagetools table",
      automatic_uploads: true,
      paste_data_images: true,
    },
    minimal: {
      relative_urls: false,
      remove_script_host: false,
      convert_urls: true,
      height: 500,
      toolbar_sticky: false,
      image_caption: true,
      plugins:
        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount  textpattern noneditable help charmap quickbars emoticons",
      menubar: "",
      toolbar:
        "bold italic underline strikethrough | fontsizeselect | bullist indent | link",
      toolbar_mode: "sliding",
      contextmenu: "link image imagetools table",
      automatic_uploads: true,
      paste_data_images: true,
    },
  };

  return { config, apiKey };
};

export default useTinyMCE;
