/**
 * VPI Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($, VPI) {

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
  ];

  //Create the new tab
  var tab_pane = $("<div />", {
    "id": "control-sidebar-theme-demo-options-tab",
    "class": "tab-pane active"
  });

  //Create the tab button
  var tab_button = $("<li />", {"class": "active"})
          .html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>"
                  + "<i class='fa fa-wrench'></i>"
                  + "</a>");

  //Add the tab button to the right sidebar tabs
  $("[href='#control-sidebar-home-tab']")
          .parent()
          .before(tab_button);

  //Create the menu
  var demo_settings = $("<div />");

  //Layout options
  demo_settings.append(
          "<h4 class='control-sidebar-heading'>"
          + "Fabrikstrukturplanungs-Module"
          + "</h4>"
          //
          + "<div class='form-group'>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Arbeitsplatzgestaltung (APG)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Arbeitsvorbereitung (AVB)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Fertigungsmittelplanung (FMP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "IT-Plannung (ITP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Kapazitätsplanung (KAP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Layoutplanung (LAY)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Personal und Organisation (PER)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Produktionslogistikplanung (PLP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Produktionsprogrammanalysis (PRG)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Produktanalyse (PRO)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Produktionstrukturplanung (PSP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Produktionssteuerungsplanung (PST)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Prozessanalyse (PZA)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Technologiekettenplanung (TKP)"
          + "</label>"
          + "</div>"
          + "</div>"
          //
          +"<h4 class='control-sidebar-heading'>"
          + "Strategisches Planungsmodul"
          + "</h4>"
          + "<div class='form-group'>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Zielplanung (ZPL)"
          + "</label>"
          + "</div>"
          + "</div>"
          //
          +"<h4 class='control-sidebar-heading'>"
          + "Gemeinsame Module"
          + "</h4>"
          + "<div class='form-group'>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Standortauswahl (SAW)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Werksstrukturplanung (WSP)"
          + "</label>"
          + "</div>"
          + "</div>"
          //
          +"<h4 class='control-sidebar-heading'>"
          + "Projektmanagement"
          + "</h4>"
          + "<div class='form-group'>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Umsetzungsplanung (UMS)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Wirtschaftlichkeitsberechnung (WIB)"
          + "</label>"
          + "</div>"
          + "</div>"
          //
          +"<h4 class='control-sidebar-heading'>"
          + "Industriebau-Modul"
          + "</h4>"
          + "<div class='form-group'>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Außenanlagenplanung (AAP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Architektonische (ATP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Plannung der Abwasser (AWG)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Brandschutyplannung (BSP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Energie und Bauphzsikplannung (EBP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Plannung der Fernmelde (FIA)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Fertigungsplannung (FP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Gebäudeautomationsplannung (GAP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Gründungs und Bodenbela (GBB)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Innenausbauplannung (IAP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Planung der Kälteanlagen (KVA)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "PLanung der raumlufttechnik (RTA)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Starkstromanlagenplanung (SAP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Tragwerksplanung (TWP)"
          + "</label>"
          + "</div>"
          + "<div class='radio'>"
          + "<label class='control-sidebar-subheading'>"
          + "<input type='radio' class='pull-right'/> "
          + "Planung der Wärmevversor (WVA)"
          + "</label>"
          + "</div>"
          + "</div>"
          //
          );

  tab_pane.append(demo_settings);
  $("#control-sidebar-home-tab").after(tab_pane);

  setup();

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    VPI.layout.fixSidebar();
    //Fix the problem with right sidebar and layout boxed
    if (cls == "layout-boxed")
      VPI.controlSidebar._fix($(".control-sidebar-bg"));
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      VPI.pushMenu.expandOnHover();
      VPI.controlSidebar._fixForFixed($('.control-sidebar'));
      VPI.layout.activate();
    }
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem(name);
    } else {
      alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, my_skins))
      change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on('click', function (e) {
      e.preventDefault();
      change_skin($(this).data('skin'));
    });

    //Add the layout manager
    $("[data-layout]").on('click', function () {
      change_layout($(this).data('layout'));
    });

    $("[data-controlsidebar]").on('click', function () {
      change_layout($(this).data('controlsidebar'));
      var slide = !VPI.options.controlSidebarOptions.slide;
      VPI.options.controlSidebarOptions.slide = slide;
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open');
    });

    $("[data-sidebarskin='toggle']").on('click', function () {
      var sidebar = $(".control-sidebar");
      if (sidebar.hasClass("control-sidebar-dark")) {
        sidebar.removeClass("control-sidebar-dark")
        sidebar.addClass("control-sidebar-light")
      } else {
        sidebar.removeClass("control-sidebar-light")
        sidebar.addClass("control-sidebar-dark")
      }
    });

    $("[data-enable='expandOnHover']").on('click', function () {
      $(this).attr('disabled', true);
      VPI.pushMenu.expandOnHover();
      if(!$('body').hasClass('sidebar-collapse'))
        $("[data-layout='sidebar-collapse']").click();
    });

    // Reset options
    if($('body').hasClass('fixed')) {
      $("[data-layout='fixed']").attr('checked', 'checked');
    }
    if($('body').hasClass('layout-boxed')) {
      $("[data-layout='layout-boxed']").attr('checked', 'checked');
    }
    if($('body').hasClass('sidebar-collapse')) {
      $("[data-layout='sidebar-collapse']").attr('checked', 'checked');
    }

  }
})(jQuery, $.VPI);
