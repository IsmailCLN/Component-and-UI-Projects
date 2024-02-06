$(document).ready(function () {
  var groupColumn = 2;
  var table = $("#example").DataTable({
    order: [[groupColumn, "asc"]],
    initComplete: function () {
      $("div.hideMe").closest("tr").addClass("hidden");
    },

    searching: false,
    lengthChange: false,
    rowGroup: {
      dataSrc: groupColumn,
      startRender: function (rows, group) {
        var total = 0;
        rows
          .rows()
          .data()
          .filter(function (value, index) {
            total +=
              value[groupColumn] === group
                ? parseInt(value[5].replace(/[^\d]/g, "") * 1)
                : 0;
          });
        const formattedTotal = total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
        return group + " Toplamı: " + formattedTotal;
      },
    },
    language: {
      url: "./datatables-tr.json",
    },
    select: {
      style: "single",
    },
  });
});

//Tek Seviye Slider-Checkbox
document.addEventListener("DOMContentLoaded", function () {
  var tekSeviyeLink = document.querySelector(
    '.nav-link[data-bs-target="#tekSeviye"]'
  );
  var toggleOffIcon = tekSeviyeLink.querySelector(".toggle-off-icon");
  var toggleOnIcon = tekSeviyeLink.querySelector(".toggle-on-icon");

  tekSeviyeLink.addEventListener("click", function () {
    toggleOffIcon.classList.toggle("d-none");
    toggleOnIcon.classList.toggle("d-none");
  });
});

//Multi Slider-Checkbox
document.addEventListener("DOMContentLoaded", function () {
  var MultiLink = document.querySelector('.nav-link[data-bs-target="#multi"]');
  var toggleOffIcon = MultiLink.querySelector(".toggle-off-icon");
  var toggleOnIcon = MultiLink.querySelector(".toggle-on-icon");

  MultiLink.addEventListener("click", function () {
    toggleOffIcon.classList.toggle("d-none");
    toggleOnIcon.classList.toggle("d-none");
  });
});

//Multi-Two Slider-Checkbox
document.addEventListener("DOMContentLoaded", function () {
  var multiTwoLink = document.querySelector(
    '.nav-link[data-bs-target="#multi-two"]'
  );
  var toggleOffIcon = multiTwoLink.querySelector(".toggle-off-icon");
  var toggleOnIcon = multiTwoLink.querySelector(".toggle-on-icon");

  multiTwoLink.addEventListener("click", function () {
    toggleOffIcon.classList.toggle("d-none");
    toggleOnIcon.classList.toggle("d-none");
  });
});
