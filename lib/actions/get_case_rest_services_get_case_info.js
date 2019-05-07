/**
 * Auto-generated action file for "U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search" API.
 *
 * Generated at: 2019-05-07T14:40:22.078Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / epa-gov-case-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/case_rest_services.get_case_info'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "output",
    "p_case_category",
    "p_case_status",
    "p_milestone",
    "p_from_date",
    "p_to_date",
    "p_milestone_fy",
    "p_name",
    "p_name_type",
    "p_case_number",
    "p_docket_number",
    "p_activity_number",
    "p_case_lead",
    "p_case_sens_flg",
    "p_region",
    "p_state",
    "p_district",
    "p_sic",
    "p_sic_ao_naics",
    "p_sic_primary_flg",
    "p_sic_frs_flg",
    "p_naics",
    "p_naics_primary_flg",
    "p_naics_frs_flg",
    "p_enf_type",
    "p_law",
    "p_section",
    "p_cp_citation",
    "p_rank_order",
    "p_enf_program",
    "p_violation",
    "p_priority_area",
    "p_priority_area_desc",
    "p_tribal",
    "p_oeca_core",
    "p_multimedia",
    "p_fed_case",
    "p_activity_contact",
    "p_role",
    "p_fed_penalty",
    "p_total_fed_penalty",
    "p_cost_recovery",
    "p_total_cost_recovery",
    "p_complying_actions",
    "p_comp_act_val",
    "p_total_comp_act_val",
    "p_sep_cats",
    "p_sep_val",
    "p_total_sep_val",
    "p_lodged_date",
    "p_entered_date",
    "p_facility_id",
    "p_fac_city",
    "p_fac_zip",
    "p_fac_county",
    "p_case_summary",
    "p_case_summary_type",
    "p_usmex",
    "p_c1lat",
    "p_c1lon",
    "p_c2lat",
    "p_c2lon",
    "p_voluntary",
    "p_fed_indicator",
    "p_fntype",
    "p_civil_criminal_indicator",
    "queryset",
    "responseset",
    "mapset",
    "callback",
    "qcolumns",
    "p_pretty_print",
    "p_ocmap_fy"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "output": "output",
    "p_case_category": "p_case_category",
    "p_case_status": "p_case_status",
    "p_milestone": "p_milestone",
    "p_from_date": "p_from_date",
    "p_to_date": "p_to_date",
    "p_milestone_fy": "p_milestone_fy",
    "p_name": "p_name",
    "p_name_type": "p_name_type",
    "p_case_number": "p_case_number",
    "p_docket_number": "p_docket_number",
    "p_activity_number": "p_activity_number",
    "p_case_lead": "p_case_lead",
    "p_case_sens_flg": "p_case_sens_flg",
    "p_region": "p_region",
    "p_state": "p_state",
    "p_district": "p_district",
    "p_sic": "p_sic",
    "p_sic_ao_naics": "p_sic_ao_naics",
    "p_sic_primary_flg": "p_sic_primary_flg",
    "p_sic_frs_flg": "p_sic_frs_flg",
    "p_naics": "p_naics",
    "p_naics_primary_flg": "p_naics_primary_flg",
    "p_naics_frs_flg": "p_naics_frs_flg",
    "p_enf_type": "p_enf_type",
    "p_law": "p_law",
    "p_section": "p_section",
    "p_cp_citation": "p_cp_citation",
    "p_rank_order": "p_rank_order",
    "p_enf_program": "p_enf_program",
    "p_violation": "p_violation",
    "p_priority_area": "p_priority_area",
    "p_priority_area_desc": "p_priority_area_desc",
    "p_tribal": "p_tribal",
    "p_oeca_core": "p_oeca_core",
    "p_multimedia": "p_multimedia",
    "p_fed_case": "p_fed_case",
    "p_activity_contact": "p_activity_contact",
    "p_role": "p_role",
    "p_fed_penalty": "p_fed_penalty",
    "p_total_fed_penalty": "p_total_fed_penalty",
    "p_cost_recovery": "p_cost_recovery",
    "p_total_cost_recovery": "p_total_cost_recovery",
    "p_complying_actions": "p_complying_actions",
    "p_comp_act_val": "p_comp_act_val",
    "p_total_comp_act_val": "p_total_comp_act_val",
    "p_sep_cats": "p_sep_cats",
    "p_sep_val": "p_sep_val",
    "p_total_sep_val": "p_total_sep_val",
    "p_lodged_date": "p_lodged_date",
    "p_entered_date": "p_entered_date",
    "p_facility_id": "p_facility_id",
    "p_fac_city": "p_fac_city",
    "p_fac_zip": "p_fac_zip",
    "p_fac_county": "p_fac_county",
    "p_case_summary": "p_case_summary",
    "p_case_summary_type": "p_case_summary_type",
    "p_usmex": "p_usmex",
    "p_c1lat": "p_c1lat",
    "p_c1lon": "p_c1lon",
    "p_c2lat": "p_c2lat",
    "p_c2lon": "p_c2lon",
    "p_voluntary": "p_voluntary",
    "p_fed_indicator": "p_fed_indicator",
    "p_fntype": "p_fntype",
    "p_civil_criminal_indicator": "p_civil_criminal_indicator",
    "queryset": "queryset",
    "responseset": "responseset",
    "mapset": "mapset",
    "callback": "callback",
    "qcolumns": "qcolumns",
    "p_pretty_print": "p_pretty_print",
    "p_ocmap_fy": "p_ocmap_fy"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/case_rest_services.get_case_info',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}