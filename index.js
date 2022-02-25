const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
require("dotenv").config();
const userData = require("./data/userData.json");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jobapp1",
});
var app = express();

//url encoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set path for public dir
app.use(express.static(path.join(__dirname, "/public")));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// jobApp page render
app.get("/", (req, res) => {
  let sql = "SELECT `stateid`, `statename` FROM `state_master` ";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var data = result;

    let sql1 = "SELECT `cityid`, `cityname` FROM `city_master` ";
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      var cities = result;

      let sql2 = "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  3";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
        var edu_ct = result;

        let sql3 =
          "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  6";
        connection.query(sql3, (err, result) => {
          if (err) throw err;
          var prefloccombo = result;

          let sql4 =
            "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  7";
          connection.query(sql4, (err, result) => {
            if (err) throw err;
            var dept = result;

            let sql5 =
              "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  4";
            connection.query(sql5, (err, result) => {
              if (err) throw err;
              var langknown = result;

              let sql6 =
                "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  5";
              connection.query(sql6, (err, result) => {
                if (err) throw err;
                var techknown = result;

                res.render("jobApp", {
                  edu_ct,
                  cities,
                  data,
                  prefloccombo,
                  dept,
                  langknown,
                  techknown,
                });
              });
            });
          });
        });
      });
    });
  });
});

app.get("/wiz", (req, res) => {
  let sql = "SELECT `stateid`, `statename` FROM `state_master` ";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var data = result;

    let sql1 = "SELECT `cityid`, `cityname` FROM `city_master` ";
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      var cities = result;

      let sql2 = "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  3";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
        var edu_ct = result;

        let sql3 =
          "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  6";
        connection.query(sql3, (err, result) => {
          if (err) throw err;
          var prefloccombo = result;

          let sql4 =
            "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  7";
          connection.query(sql4, (err, result) => {
            if (err) throw err;
            var dept = result;

            let sql5 =
              "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  4";
            connection.query(sql5, (err, result) => {
              if (err) throw err;
              var langknown = result;

              let sql6 =
                "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  5";
              connection.query(sql6, (err, result) => {
                if (err) throw err;
                var techknown = result;

                res.render("wizard", {
                  edu_ct,
                  cities,
                  data,
                  prefloccombo,
                  dept,
                  langknown,
                  techknown,
                });
              });
            });
          });
        });
      });
    });
  });
});

// Wizard with AJAX

app.get("/ajax", (req, res) => {
  let sql = "SELECT `stateid`, `statename` FROM `state_master` ";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var data = result;

    let sql1 = "SELECT `cityid`, `cityname` FROM `city_master` ";
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      var cities = result;

      let sql2 = "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  3";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
        var edu_ct = result;

        let sql3 =
          "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  6";
        connection.query(sql3, (err, result) => {
          if (err) throw err;
          var prefloccombo = result;

          let sql4 =
            "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  7";
          connection.query(sql4, (err, result) => {
            if (err) throw err;
            var dept = result;

            let sql5 =
              "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  4";
            connection.query(sql5, (err, result) => {
              if (err) throw err;
              var langknown = result;

              let sql6 =
                "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  5";
              connection.query(sql6, (err, result) => {
                if (err) throw err;
                var techknown = result;

                res.render("ajaxwiz", {
                  edu_ct,
                  cities,
                  data,
                  prefloccombo,
                  dept,
                  langknown,
                  techknown,
                });
              });
            });
          });
        });
      });
    });
  });
});

// jobApp page render
app.get("/jobAppEdit", (req, res) => {
  var id = req.query.jobid;
  let sql = "SELECT `stateid`, `statename` FROM `state_master` ";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var data = result;

    let sql1 = "SELECT `cityid`, `cityname` FROM `city_master` ";
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      var cities = result;

      let sql2 = "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  3";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
        var edu_ct = result;

        let sql3 =
          "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  6";
        connection.query(sql3, (err, result) => {
          if (err) throw err;
          var prefloccombo = result;

          let sql4 =
            "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  7";
          connection.query(sql4, (err, result) => {
            if (err) throw err;
            var dept = result;

            let sql5 =
              "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  4";
            connection.query(sql5, (err, result) => {
              if (err) throw err;
              var langknown = result;

              let sql6 =
                "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  5";
              connection.query(sql6, (err, result) => {
                if (err) throw err;
                var techknown = result;

                let sql =
                  `SELECT job_applications.jobid,job_applications.fname, job_applications.lname, job_applications.email, job_applications.designation, job_applications.add1, job_applications.add2, city_master.cityname, job_applications.phoneno, job_applications.zip, job_applications.dob, (option_master.o_name) as gender, state_master.statename, job_applications.marital_statusid FROM job_applications INNER JOIN state_master ON job_applications.stateid = state_master.stateid INNER JOIN city_master ON job_applications.cityid = city_master.cityid INNER JOIN option_master ON job_applications.genderid = option_master.oid WHERE job_applications.jobid = ` +
                  req.query.jobid;
                connection.query(sql, (err, result) => {
                  if (err) throw err;
                  var jobdata = result;

                  let sql =
                    `SELECT * FROM edu_details INNER JOIN option_master ON edu_details.oid = option_master.oid WHERE jobid = ` +
                    req.query.jobid;
                  connection.query(sql, (err, result) => {
                    if (err) throw err;
                    var edudata = result;

                    let sql =
                      `SELECT * FROM workexp_details WHERE jobid =` +
                      req.query.jobid;
                    connection.query(sql, (err, result) => {
                      if (err) throw err;
                      var workexpdata = result;

                      let sql =
                        `SELECT * FROM language INNER JOIN job_applications ON job_applications.jobid= language.jobid INNER JOIN option_master ON option_master.oid = language.oid WHERE language.jobid =` +
                        req.query.jobid;
                      connection.query(sql, (err, result) => {
                        if (err) throw err;
                        var langdata = result;

                        let sql =
                          `SELECT * FROM technology INNER JOIN job_applications ON job_applications.jobid= technology.jobid INNER JOIN option_master ON option_master.oid = technology.oid WHERE technology.jobid =` +
                          req.query.jobid;
                        connection.query(sql, (err, result) => {
                          if (err) throw err;
                          var techdata = result;

                          let sql =
                            `SELECT * FROM ref_details WHERE jobid =` +
                            req.query.jobid;
                          connection.query(sql, (err, result) => {
                            if (err) throw err;
                            var refdata = result;

                            let sql =
                              `SELECT * FROM preferences INNER JOIN option_master ON preferences.preflocid = option_master.oid WHERE preferences.jobid = ` +
                              req.query.jobid;
                            connection.query(sql, (err, result) => {
                              if (err) throw err;
                              var prefdata = result;

                              let sql =
                                `SELECT * FROM preferences INNER JOIN option_master ON preferences.deptid = option_master.oid WHERE preferences.jobid =` +
                                req.query.jobid;
                              connection.query(sql, (err, result) => {
                                if (err) throw err;
                                var prefdata1 = result;

                                res.render("jobAppEdit", {
                                  edu_ct,
                                  cities,
                                  data,
                                  prefloccombo,
                                  dept,
                                  langknown,
                                  techknown,
                                  jobdata,
                                  edudata,
                                  workexpdata,
                                  langdata,
                                  techdata,
                                  refdata,
                                  prefdata,
                                  prefdata1,
                                  id,
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

app.get("/jobAppDelete", (req, res) => {
  let del_record = req.query.del_record;
  console.log(del_record);
  if (del_record != undefined) {
    let sql = "DELETE FROM job_applications WHERE jobid = " + del_record;
    let sql1 = "DELETE FROM edu_details WHERE jobid = " + del_record;
    let sql2 = "DELETE FROM workexp_details WHERE jobid = " + del_record;
    let sql3 = "DELETE FROM language WHERE jobid = " + del_record;
    let sql4 = "DELETE FROM technology WHERE jobid = " + del_record;
    let sql5 = "DELETE FROM ref_details WHERE jobid = " + del_record;
    let sql6 = "DELETE FROM preferences WHERE jobid = " + del_record;

    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully job_applications");
    });
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully edu_details");
    });
    connection.query(sql2, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully workexp_details");
    });
    connection.query(sql3, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully language");
    });
    connection.query(sql4, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully technology");
    });
    connection.query(sql5, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully ref_details");
    });
    connection.query(sql6, (err, result) => {
      if (err) throw err;
      console.log("record deleted successfully preferences");
    });
  }
  let sql3 = "SELECT * FROM `job_applications` order by jobid desc limit 0,20";
  connection.query(sql3, (err, result) => {
    if (err) throw err;
    res.render("jobAppList", { data: result });
  });
});

//job App view page render
app.get("/jobAppView", (req, res) => {
  // console.log(req.query.jobid);
  let sql =
    `SELECT job_applications.jobid,job_applications.fname,  job_applications.lname, job_applications.email, job_applications.designation, job_applications.add1, job_applications.add2, city_master.cityname, job_applications.phoneno, job_applications.zip, job_applications.dob, (option_master.o_name) as gender, state_master.statename, job_applications.marital_statusid FROM job_applications
  INNER JOIN state_master
  ON job_applications.stateid = state_master.stateid
  
  INNER JOIN city_master
  ON job_applications.cityid = city_master.cityid
  
  INNER JOIN option_master
  ON job_applications.genderid = option_master.oid
  
  WHERE job_applications.jobid = ` + req.query.jobid;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var data = result;

    let sql =
      `SELECT * FROM edu_details INNER JOIN option_master ON edu_details.oid = option_master.oid WHERE jobid = ` +
      req.query.jobid;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      var edudata = result;

      let sql = `SELECT * FROM workexp_details WHERE jobid =` + req.query.jobid;
      connection.query(sql, (err, result) => {
        if (err) throw err;
        var workexpdata = result;

        let sql =
          "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  4";
        connection.query(sql, (err, result) => {
          if (err) throw err;
          var langknown = result;

          let sql =
            "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  5";
          connection.query(sql, (err, result) => {
            if (err) throw err;
            var techknown = result;

            let sql =
              `SELECT * FROM language INNER JOIN job_applications ON job_applications.jobid= language.jobid INNER JOIN option_master ON option_master.oid = language.oid WHERE language.jobid =` +
              req.query.jobid;
            connection.query(sql, (err, result) => {
              if (err) throw err;
              var langdata = result;

              let sql =
                `SELECT * FROM technology INNER JOIN job_applications ON job_applications.jobid= technology.jobid INNER JOIN option_master ON option_master.oid = technology.oid WHERE technology.jobid =` +
                req.query.jobid;
              connection.query(sql, (err, result) => {
                if (err) throw err;
                var techdata = result;

                let sql =
                  `SELECT * FROM ref_details WHERE jobid =` + req.query.jobid;
                connection.query(sql, (err, result) => {
                  if (err) throw err;
                  var refdata = result;

                  let sql =
                    "SELECT `oid`, `o_name` FROM `option_master` WHERE `sid` =  6";
                  connection.query(sql, (err, result) => {
                    if (err) throw err;
                    var prefloccombo = result;

                    let sql =
                      `SELECT * FROM preferences INNER JOIN option_master ON preferences.preflocid = option_master.oid WHERE preferences.jobid = ` +
                      req.query.jobid;
                    connection.query(sql, (err, result) => {
                      if (err) throw err;
                      var prefdata = result;

                      let sql =
                        `SELECT * FROM preferences INNER JOIN option_master ON preferences.deptid = option_master.oid WHERE preferences.jobid =` +
                        req.query.jobid;
                      connection.query(sql, (err, result) => {
                        if (err) throw err;
                        var prefdata1 = result;
                        res.render("jobAppView", {
                          data,
                          edudata,
                          workexpdata,
                          langdata,
                          langknown,
                          techknown,
                          techdata,
                          refdata,
                          prefloccombo,
                          prefdata,
                          prefdata1,
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

//for the post jobApp Edit form
app.post("/jobAppUpdate", (req, res) => {
  var arr = req.body;
  console.log(arr);
  console.log("jobid=" + typeof parseInt(arr.jobid));

  let sql1 =
    'UPDATE job_applications SET fname="' +
    arr.firstname +
    '",lname="' +
    arr.lastname +
    '",email="' +
    arr.email +
    '",designation="' +
    arr.designation +
    '",add1="' +
    arr.addr1 +
    '",add2="' +
    arr.addr2 +
    '",cityid=' +
    arr.city +
    ',phoneno="' +
    arr.phone +
    '",zip="' +
    arr.zip +
    '",dob="' +
    arr.dob +
    '",genderid=' +
    arr.gender +
    ',stateid="' +
    arr.state +
    '",marital_statusid=' +
    arr.materialStatus +
    " WHERE jobid=" +
    arr.jobid;
  connection.query(sql1, (err, result) => {
    if (err) throw err;
    console.log("job_applications updated successfully");
  });

  let sql2 = "DELETE FROM edu_details WHERE jobid = " + parseInt(arr.jobid);
  connection.query(sql2, (err, result) => {
    if (err) throw err;
    console.log("edu_details deleted successfully");
  });

  var edurows = arr.education;
  var count = edurows.length;
  // console.log(edurows);
  for (i = 0; i < count; i++) {
    let oid = req.body["courseName" + i];
    let uni_board = req.body["universityName" + i];
    let passingyear = req.body["passingYear" + i];
    let percentage = req.body["percentage" + i];
    let sql3 =
      "INSERT INTO `edu_details`(`oid`, `uni_board`, `passingyear`, `percentage`, `jobid`) VALUES (" +
      oid +
      ',"' +
      uni_board +
      '",' +
      passingyear +
      "," +
      percentage +
      "," +
      parseInt(arr.jobid) +
      ")";
    connection.query(sql3, (err, result) => {
      if (err) throw err;
    });
  }

  let sql4 = "DELETE FROM workexp_details WHERE jobid = " + parseInt(arr.jobid);
  connection.query(sql4, (err, result) => {
    if (err) throw err;
    console.log("workexp_details deleted successfully");
  });

  var wexrows = arr.wexrows || 1;
  console.log(wexrows);
  for (i = 1; i <= wexrows; i++) {
    let company_name = req.body["companyName" + i];
    let designation = req.body["designation" + i];
    let fromdate = req.body["from" + i];
    let todate = req.body["to" + i];
    let sql5 =
      'INSERT INTO `workexp_details`(`company_name`, `designation`, `fromdate`, `todate`, `jobid`) VALUES ("' +
      company_name +
      '","' +
      designation +
      '","' +
      fromdate +
      '","' +
      todate +
      '",' +
      parseInt(arr.jobid) +
      ")";
    connection.query(sql5, (err, result) => {
      if (err) throw err;
    });
  }

  let sql = "SELECT * FROM `job_applications` order by jobid desc limit 0,20";
  connection.query(sql, (err, result) => {
    res.render("jobAppList", { data: result });
  });
});

app.post("/jobAppList", (req, res) => {
  var arr = req.body;
  console.log(arr);

  let sql =
    'INSERT INTO job_applications (`fname`, `lname`, `email`, `designation`, `add1`, `add2`, `cityid`, `phoneno`, `zip`, `dob`, `genderid`, `stateid`, `marital_statusid`) VALUES ("' +
    arr.firstname +
    '","' +
    arr.lastname +
    '","' +
    arr.email +
    '","' +
    arr.designation +
    '","' +
    arr.addr1 +
    '","' +
    arr.addr2 +
    '",' +
    arr.city +
    ',"' +
    arr.phone +
    '","' +
    arr.zip +
    '","' +
    arr.dob +
    '",' +
    arr.gender +
    "," +
    arr.state +
    "," +
    arr.materialStatus +
    ");";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    var jobid = result.insertId;
    // console.log(jobid);

    var edurows = arr.edurows || 1;
    // console.log(edurows);
    for (i = 1; i <= edurows; i++) {
      let oid = req.body["courseName" + i];
      let uni_board = req.body["universityName" + i];
      let passingyear = req.body["passingYear" + i];
      let percentage = req.body["percentage" + i];
      let sql2 =
        "INSERT INTO `edu_details`(`oid`, `uni_board`, `passingyear`, `percentage`, `jobid`) VALUES (" +
        oid +
        ',"' +
        uni_board +
        '",' +
        passingyear +
        "," +
        percentage +
        "," +
        jobid +
        ")";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
      });
    }

    var wexrows = arr.wexrows || 1;
    console.log(wexrows);
    for (i = 1; i <= wexrows; i++) {
      let company_name = req.body["companyName" + i];
      let designation = req.body["designation" + i];
      let fromdate = req.body["from" + i];
      let todate = req.body["to" + i];
      let sql2 =
        'INSERT INTO `workexp_details`(`company_name`, `designation`, `fromdate`, `todate`, `jobid`) VALUES ("' +
        company_name +
        '","' +
        designation +
        '","' +
        fromdate +
        '","' +
        todate +
        '",' +
        jobid +
        ")";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
      });
    }

    var refsrows = arr.refsrows || 1;
    console.log(refsrows);
    for (i = 1; i <= refsrows; i++) {
      let refname = req.body["refName" + i];
      let contactno = req.body["refContact" + i];
      let relation = req.body["refRelation" + i];
      let sql2 =
        'INSERT INTO `ref_details`( `refname`, `contactno`, `relation`, `jobid`) VALUES ("' +
        refname +
        '","' +
        contactno +
        '","' +
        relation +
        '",' +
        jobid +
        ")";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkHindibut"] != undefined) {
      let langhindi = req.body["chkHindibut"];
      let readhindi = req.body["chkHindiread"];
      let writehindi = req.body["chkHindiwrite"];
      let speakhindi = req.body["chkHindispeak"];
      let sql =
        "INSERT INTO `language`(`oid`, `jobid`) VALUES (" +
        langhindi +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkEnglishbut"] != undefined) {
      let langenglish = req.body["chkEnglishbut"];
      let readenglish = req.body["chkEnglishread"];
      let writeenglish = req.body["chkEnglishwrite"];
      let speakenglish = req.body["chkEnglishspeak"];
      let sql =
        "INSERT INTO `language`(`oid`, `jobid`) VALUES (" +
        langenglish +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkGujaratibut"] != undefined) {
      let langgujarati = req.body["chkGujaratibut"];
      let readgujarati = req.body["chkGujaratiread"];
      let writegujarati = req.body["chkGujaratiwrite"];
      let speakgujarati = req.body["chkGujaratispeak"];
      let sql =
        "INSERT INTO `language`(`oid`, `jobid`) VALUES (" +
        langgujarati +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkPHPbut"] != undefined) {
      let rbPHPbeginer = req.body["rbPHPbeginer"];
      let rbPHPmediator = req.body["rbPHPmediator"];
      let rbPHPexpert = req.body["rbPHPexpert"];
      let sql =
        "INSERT INTO `technology`(`oid`, `jobid`) VALUES (" +
        req.body["chkPHPbut"] +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkLaravelbut"] != undefined) {
      let rbLaravelbeginer = req.body["rbLaravelbeginer"];
      let rbLaravelmediator = req.body["rbLaravelmediator"];
      let rbLaravelexpert = req.body["rbLaravelexpert"];
      let sql =
        "INSERT INTO `technology`(`oid`, `jobid`) VALUES (" +
        req.body["chkLaravelbut"] +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkMysqlbut"] != undefined) {
      let rbMysqlbeginer = req.body["rbMysqlbeginer"];
      let rbMysqlmediator = req.body["rbMysqlmediator"];
      let rbMysqlexpert = req.body["rbMysqlexpert"];
      let sql =
        "INSERT INTO `technology`(`oid`, `jobid`) VALUES (" +
        req.body["chkMysqlbut"] +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    if (req.body["chkOraclebut"] != undefined) {
      let rbOraclebeginer = req.body["rbOraclebeginer"];
      let rbOraclemediator = req.body["rbOraclemediator"];
      let rbOracleexpert = req.body["rbOracleexpert"];
      let sql =
        "INSERT INTO `technology`(`oid`, `jobid`) VALUES (" +
        req.body["chkOraclebut"] +
        "," +
        jobid +
        ")";
      connection.query(sql, (err, result) => {
        if (err) throw err;
      });
    }

    let location = req.body["location"];
    // console.log(location);
    function sliceIntoChunks(abc, chunkSize) {
      const res = [];
      for (let i = 0; i < abc.length; i += chunkSize) {
        const chunk = abc.slice(i, i + chunkSize);
        res.push(chunk);
      }
      return res;
    }
    let loc = sliceIntoChunks(location, 1);
    let noticePeriod = req.body["noticePeriod"];
    let currentCTC = req.body["currentCTC"];
    let expectedCTC = req.body["expectedCTC"];
    let department = req.body["department"];
    for (let i = 0; i < loc.length; i++) {
      var l = parseInt(loc[i]);
      let sql2 =
        "INSERT INTO `preferences`(`preflocid`, `noticeperiod`, `expectedctc`, `currentctc`, `deptid`, `jobid`) VALUES (" +
        l +
        ',"' +
        noticePeriod +
        '",' +
        expectedCTC +
        "," +
        currentCTC +
        "," +
        department +
        "," +
        jobid +
        ")";
      connection.query(sql2, (err, result) => {
        if (err) throw err;
      });
    }

    let sql3 =
      "SELECT * FROM `job_applications` order by jobid desc limit 0,20";
    connection.query(sql3, (err, result) => {
      res.render("jobAppList", { data: result });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
