<template>
  <me-image-viewers
    :images="list"
    text="头像信息"
  >
  </me-image-viewers>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          fileUrl: "https://img10.360buyimg.com/babel/s590x470_jfs/t20270108/232123/40/11742/47161/659cbb02F9d4b81bf/cff42849e5725d8b.jpg",
        },
        {
          fileUrl:
            "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100043111116/FocusFullshop/CkJqZnMvdDEvMjM2NDYzLzI2LzgwMjgvNDczNjUvNjU5YzRlZjZGMDgyYTYxZDcvMTRlYjExOTk4YTc2YTk1Yi5wbmcSCTQtdHlfMF81NTACOO6LekIWChLpu5Hnmb3osIPnlLXohJHmpIUQAUIUChDmr4_mu6ExMDAw5YePNTQwEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG5Yqb6I2QEAdYzPWi2PQC/cr/s/q.jpg",
        },
      ],
    }
  },
}
</script>

<style></style>
