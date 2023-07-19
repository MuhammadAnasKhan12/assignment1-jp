var mobiles = {
  apple: {
    iPhone11: {
      color: "Black",
      Price: 400500,
      size:'6.1 inches',
      ram: '4GB',
      rom: '64GB'
      },
      iphone12: {
        color: "Black",
        Price: 76500,
        size:'6.1 inches',
        ram: '4GB',
        rom: '64GB'
      },
      iphone13: {
        color: "white",
        Price: 550000,
        size:'6.1 inches',
        ram: '12GB',
        rom: '128GB'
      }
    },
    Xiaomi: {
      RedmiNote10: {
        color: "White",
        Price: 40000,
        size:'5 inches',
        ram: '4GB',
        rom: '64GB'
      },
      PocoX3: {
        color: "grey",
        Price: 40000,
        size:'5 inches',
        ram: '8GB',
        rom: '64GB'
      },
      Mi11: {
        color: "red",
        Price: 55500,
        size:'5 inches',
        ram: '8GB',
        rom: '128GB'
      }
    },
    realme: {
      Realme8: {
        color: "blue",
        Price: 35000,
        size:'5.2 inches',
        ram: '8GB',
        rom: '128GB'
      },
      RealmeGT: {
        color: "red",
        Price: 44500,
        size:'5.2 inches',
        ram: '8GB',
        rom: '128GB'
      },
      RealmeX7: {
        color: "green",
        Price: 54000,
        size:'6.1 inches',
        ram: '8GB',
        rom: '128GB'
      }
    }
  };

  var companyDropdown = document.getElementById("company");
  for (var company in mobiles) {
    var option = document.createElement("option");
    option.value = company;
    option.text = company;
    companyDropdown.add(option);
  }
  
  function Models() {
    var company = document.getElementById("company").value;
    var modelDropdown = document.getElementById("model");
    modelDropdown.innerHTML = "<option value=''>Select a model</option>";
  
    if (company !== "") {
      var models = mobiles[company];
      for (var model in models) {
        var option = document.createElement("option");
        option.value = model;
        option.text = model;
        modelDropdown.add(option);
      }
    }
  }
  
  function displayDetails() {
    var company = document.getElementById("company").value;
    var model = document.getElementById("model").value;
    var mobDetailsDiv = document.getElementById("mobDetails");
  
    if (company !== "" && model !== "") {
      var mob = mobiles[company][model];
      mobDetailsDiv.innerHTML = "<b>Color:</b> " + mob.color + "<br>" + "<b>Price:</b> " + mob.Price+ "<br>"+"<b>size:</b>"+mob.size+"<br>"+"<b>ram:</b> " + mob.ram + "<br>"+"<b>rom:</b> " + mob.rom + "<br>";
    } else {
      mobDetailsDiv.innerHTML = "";
    }
  }
  