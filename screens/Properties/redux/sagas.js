import { call, put } from 'redux-saga/effects'
import { PropertyApiService } from '../../../services/PropertyService';
import { loadPropertySuccess } from './actions';
import ApiRequestService from '../../../services/ApiRequestService';

export const  test = {
    "data": [
        {
            "type": "property",
            "id": "6129832",
            "attributes": {
                "name": "Affordable 5BR Villa w/ Pool and Garden!",
                "area": "3,750 sqft",
                "size": 3750,
                "size_unit": "sqft",
                "price_period_label": "Yearly",
                "price_period_identifier": "yearly",
                "offering_type": "Residential for Rent",
                "offering_type_id": 2,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "VH28547",
                "rera": "",
                "price_on_application": false,
                "default_price": 165000,
                "category_id": 2,
                "category_identifier": "rent",
                "type_id": 35,
                "type_identifier": "villa",
                "broker_id": 1319,
                "agent_id": 128772,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "premium",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 5,
                "bedroom_name": "5",
                "location_tree_path": "Contemporary Style, Al Reef Villas, Al Reef, Abu Dhabi",
                "serp_score": 93.599999999999994,
                "quality_score": 100,
                "view_360": "https://tour.getlookaround.com/FtVIu0rd9z1",
                "rsp": 93.599999999999994,
                "rss": 69.099999999999994
            },
            "links": {
                "self": "/en/rent/villa-for-rent-abu-dhabi-al-reef-al-reef-villas-contemporary-style-6129832.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D9%81%D9%8A%D9%84%D8%A7-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D9%81%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%B7%D8%B1%D8%A7%D8%B2-%D9%85%D8%B9%D8%A7%D8%B5%D8%B1-6129832.html",
                "image_property": "//staging.propertyfinder.ae/property/1525523518/500/356/MODE/2d452b/6129832-bd544o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/10/178/98/MODE/f2a043/1319-logo.jpg"
            },
            "meta": {
                "subtitle": "Villa for Rent in Contemporary Style, Al Reef Villas",
                "price": 165000,
                "price_text": "165,000 AED/year",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528669226",
                            "link": "tel:+971528669226",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "information@ugp.ae",
                            "link": "mailto:information@ugp.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528669226",
                            "link": "tel:+971528669226",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "information@ugp.ae",
                            "link": "mailto:information@ugp.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6136230",
            "attributes": {
                "name": "Very Good Price 3 BR with 2 Balconies !!",
                "area": "2,190 sqft",
                "size": 2190,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "NAT-S-4839",
                "rera": "",
                "price_on_application": false,
                "default_price": 2150000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 772,
                "agent_id": 161298,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "standard",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 3,
                "bedroom_name": "3",
                "location_tree_path": "Amaya Towers, Shams Abu Dhabi, Al Reem Island, Abu Dhabi",
                "serp_score": 93.530000000000001,
                "quality_score": 99.900000000000006,
                "view_360": "https://www.nwmea.com/360/Amaya/Al Reem, Amaya, 3BDR.html",
                "rsp": 93.530000000000001,
                "rss": 69.099999999999994
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reem-island-shams-abu-dhabi-amaya-towers-6136230.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%85-%D8%B4%D9%85%D8%B3-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%A8%D8%B1%D8%AC-%D8%A3%D9%85%D8%A7%D9%8A%D8%A7-6136230.html",
                "image_property": "//staging.propertyfinder.ae/property/f8fa0584518fed412102938131f56cb6/500/356/MODE/1c3e8a/6136230-dc2c5o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/23/178/98/MODE/490846/772-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Amaya Towers, Shams Abu Dhabi",
                "price": 2150000,
                "price_text": "2,150,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525310607",
                            "link": "tel:+971525310607",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "khadija.z@nwmea.com",
                            "link": "mailto:khadija.z@nwmea.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525310607",
                            "link": "tel:+971525310607",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509138969",
                            "link": "sms:+971509138969"
                        },
                        "email": {
                            "type": "email",
                            "value": "khadija.z@nwmea.com",
                            "link": "mailto:khadija.z@nwmea.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6136472",
            "attributes": {
                "name": "5BR, Maids Room, Study Room, Garden, Pool",
                "area": "3,750 sqft",
                "size": 3750,
                "size_unit": "sqft",
                "price_period_label": "Yearly",
                "price_period_identifier": "yearly",
                "offering_type": "Residential for Rent",
                "offering_type_id": 2,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "NAT-R-40165",
                "rera": "",
                "price_on_application": false,
                "default_price": 165000,
                "category_id": 2,
                "category_identifier": "rent",
                "type_id": 35,
                "type_identifier": "villa",
                "broker_id": 772,
                "agent_id": 161304,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "standard",
                "bathroom_value": 6,
                "bathroom_name": "6",
                "bedroom_value": 5,
                "bedroom_name": "5",
                "location_tree_path": "Contemporary Style, Al Reef Villas, Al Reef, Abu Dhabi",
                "serp_score": 93.459999999999994,
                "quality_score": 99.799999999999997,
                "view_360": "https://www.nwmea.com/360/Reef,%20Cont.%20-%205BDR%201208%20-%20furnished/5BDR%20Contemporary%20Villa%20(%20furnished%20).html",
                "rsp": 93.459999999999994,
                "rss": 69.099999999999994
            },
            "links": {
                "self": "/en/rent/villa-for-rent-abu-dhabi-al-reef-al-reef-villas-contemporary-style-6136472.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D9%81%D9%8A%D9%84%D8%A7-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D9%81%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%B7%D8%B1%D8%A7%D8%B2-%D9%85%D8%B9%D8%A7%D8%B5%D8%B1-6136472.html",
                "image_property": "//staging.propertyfinder.ae/property/f4ee063d9329321ca573bf8342df127f/500/356/MODE/3e1099/6136472-96123o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/23/178/98/MODE/490846/772-logo.jpg"
            },
            "meta": {
                "subtitle": "Villa for Rent in Contemporary Style, Al Reef Villas",
                "price": 165000,
                "price_text": "165,000 AED/year",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528721536",
                            "link": "tel:+971528721536",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "Vijeesh.k@nwmea.com",
                            "link": "mailto:Vijeesh.k@nwmea.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528721536",
                            "link": "tel:+971528721536",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509138969",
                            "link": "sms:+971509138969"
                        },
                        "email": {
                            "type": "email",
                            "value": "Vijeesh.k@nwmea.com",
                            "link": "mailto:Vijeesh.k@nwmea.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6120146",
            "attributes": {
                "name": "Move in! Canal View 1 BR with Facilities",
                "area": "899 sqft",
                "size": 899,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "AP32234",
                "rera": "",
                "price_on_application": false,
                "default_price": 1200000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 1319,
                "agent_id": 128815,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "premium",
                "bathroom_value": 2,
                "bathroom_name": "2",
                "bedroom_value": 1,
                "bedroom_name": "1",
                "location_tree_path": "Al Sana 2, Al Muneera, Al Raha Beach, Abu Dhabi",
                "serp_score": 93.400000000000006,
                "quality_score": 100,
                "view_360": "https://tour.getlookaround.com/tocY8UtCPhh",
                "rsp": 93.400000000000006,
                "rss": 68.900000000000006
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-raha-beach-al-muneera-al-sana-2-6120146.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%B4%D8%A7%D8%B7%D8%A6-%D8%A7%D9%84%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B3%D9%86%D8%A7-2-6120146.html",
                "image_property": "//staging.propertyfinder.ae/property/24ed1b41c10e40e21a21be0316052e6c/500/356/MODE/e2ef88/6120146-dfe4co.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/10/178/98/MODE/f2a043/1319-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Al Sana 2, Al Muneera",
                "price": 1200000,
                "price_text": "1,200,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6165837",
            "attributes": {
                "name": "Back to Back Unit|Good Location in Hayat",
                "area": "2,146 sqft",
                "size": 2146,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "HL-S-7078",
                "rera": "1643564711",
                "price_on_application": false,
                "default_price": 1425000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 22,
                "type_identifier": "townhouse",
                "broker_id": 568,
                "agent_id": 120690,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 3,
                "bedroom_name": "3",
                "location_tree_path": "Hayat Townhouses 1, Hayat Townhouses, Town Square, Dubai",
                "serp_score": 93.200000000000003,
                "quality_score": 100,
                "view_360": "https://h4l.me/360/hayat1",
                "rsp": 93.200000000000003,
                "rss": 68.700000000000003
            },
            "links": {
                "self": "/en/buy/townhouse-for-sale-dubai-town-square-hayat-townhouses-hayat-townhouses-1-6165837.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AA%D8%A7%D9%88%D9%86-%D8%B3%D9%83%D9%88%D8%A7%D8%B1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-6165837.html",
                "image_property": "//staging.propertyfinder.ae/property/89e799d9f9691805538816a01149a976/500/356/MODE/4cc52f/6165837-45320o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/7/178/98/MODE/3fdcc0/568-logo.jpg"
            },
            "meta": {
                "subtitle": "Townhouse for Sale in Hayat Townhouses 1, Hayat Townhouses",
                "price": 1425000,
                "price_text": "1,425,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971568188610",
                            "link": "sms:+971568188610"
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6097694",
            "attributes": {
                "name": "Comfortable 2BR Apartment On High Floor!",
                "area": "1,722 sqft",
                "size": 1722,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "NAT-S-4787",
                "rera": "-",
                "price_on_application": false,
                "default_price": 2000000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 772,
                "agent_id": 161297,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "standard",
                "bathroom_value": 3,
                "bathroom_name": "3",
                "bedroom_value": 2,
                "bedroom_name": "2",
                "location_tree_path": "MAG 5, Marina Square, Al Reem Island, Abu Dhabi",
                "serp_score": 93.189999999999998,
                "quality_score": 99.980000000000004,
                "view_360": "https://www.nwmea.com/360/MAG5 2 Bedroom/MAG5 2 Bedroom.html",
                "rsp": 93.189999999999998,
                "rss": 68.700000000000003
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reem-island-marina-square-mag-5-6097694.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%85-%D9%85%D8%A7%D8%B1%D9%8A%D9%86%D8%A7-%D8%B3%D9%83%D9%88%D9%8A%D8%B1-b2-%D8%A8%D8%B1%D8%AC-6097694.html",
                "image_property": "//staging.propertyfinder.ae/property/5499aa6fd7766d2e9845e58982d5a053/500/356/MODE/4faaff/6097694-f5ec5o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/23/178/98/MODE/490846/772-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in MAG 5, Marina Square",
                "price": 2000000,
                "price_text": "2,000,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522493716",
                            "link": "tel:+971522493716",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "abdallah.q@nwmea.com",
                            "link": "mailto:abdallah.q@nwmea.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522493716",
                            "link": "tel:+971522493716",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509138969",
                            "link": "sms:+971509138969"
                        },
                        "email": {
                            "type": "email",
                            "value": "abdallah.q@nwmea.com",
                            "link": "mailto:abdallah.q@nwmea.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6093839",
            "attributes": {
                "name": "Outstanding! 1 BR w/ Study & Rental Back",
                "area": "947 sqft",
                "size": 947,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "NAT-S-2963",
                "rera": "-",
                "price_on_application": false,
                "default_price": 1290000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 772,
                "agent_id": 161298,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "standard",
                "bathroom_value": 2,
                "bathroom_name": "2",
                "bedroom_value": 1,
                "bedroom_name": "1",
                "location_tree_path": "The Gate Tower 1, Shams Abu Dhabi, Al Reem Island, Abu Dhabi",
                "serp_score": 93.189999999999998,
                "quality_score": 99.980000000000004,
                "view_360": "https://www.nwmea.com/360/Gate2%23305/",
                "rsp": 93.189999999999998,
                "rss": 68.700000000000003
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reem-island-shams-abu-dhabi-the-gate-tower-1-6093839.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%85-%D8%B4%D9%85%D8%B3-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-1-6093839.html",
                "image_property": "//staging.propertyfinder.ae/property/f541d70a175d7f2409cb9c9887b6911a/500/356/MODE/a6355d/6093839-1ea05o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/23/178/98/MODE/490846/772-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in The Gate Tower 1, Shams Abu Dhabi",
                "price": 1290000,
                "price_text": "1,290,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525310607",
                            "link": "tel:+971525310607",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "khadija.z@nwmea.com",
                            "link": "mailto:khadija.z@nwmea.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525310607",
                            "link": "tel:+971525310607",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509138969",
                            "link": "sms:+971509138969"
                        },
                        "email": {
                            "type": "email",
                            "value": "khadija.z@nwmea.com",
                            "link": "mailto:khadija.z@nwmea.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "5885646",
            "attributes": {
                "name": "Furnished and Affordable 1BR w/ Parking!",
                "area": "833 sqft",
                "size": 833,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "AP30644",
                "rera": "",
                "price_on_application": false,
                "default_price": 950000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 1319,
                "agent_id": 128815,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "premium",
                "bathroom_value": 2,
                "bathroom_name": "2",
                "bedroom_value": 1,
                "bedroom_name": "1",
                "location_tree_path": "Sun Tower, Shams Abu Dhabi, Al Reem Island, Abu Dhabi",
                "serp_score": 93,
                "quality_score": 100,
                "view_360": "https://tour.getlookaround.com/XoqRsGTZjqv",
                "rsp": 93,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reem-island-shams-abu-dhabi-sun-tower-5885646.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%85-%D8%B4%D9%85%D8%B3-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%B4%D9%85%D8%B3-5885646.html",
                "image_property": "//staging.propertyfinder.ae/property/7c4c4036a7cd3e4a7ef0ac58546626ca/500/356/MODE/469b3b/5885646-9f641o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/10/178/98/MODE/f2a043/1319-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Sun Tower, Shams Abu Dhabi",
                "price": 950000,
                "price_text": "950,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6061542",
            "attributes": {
                "name": "3+M BR with Balcony + Etihad Plaza View.",
                "area": "1,655 sqft",
                "size": 1655,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "AP10095",
                "rera": "",
                "price_on_application": false,
                "default_price": 2000000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 1027,
                "agent_id": 117818,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "premium",
                "listing_level": "premium",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 3,
                "bedroom_name": "3",
                "location_tree_path": "Al Nada 1, Al Muneera, Al Raha Beach, Abu Dhabi",
                "serp_score": 93,
                "quality_score": 100,
                "view_360": "https://www.psinv.net/VirtualTour/al-raha-beach/al-muneera/mainland/al-nada/al-nada-1/3-bedroom-apartment/type-3a",
                "rsp": 93,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-raha-beach-al-muneera-al-nada-1-6061542.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%B4%D8%A7%D8%B7%D8%A6-%D8%A7%D9%84%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D9%86%D8%AF%D9%89-1-6061542.html",
                "image_property": "//staging.propertyfinder.ae/property/1522500224/500/356/MODE/a1b693/6061542-dac98o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/2/178/98/MODE/d1d8ea/1027-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Al Nada 1, Al Muneera",
                "price": 2000000,
                "price_text": "2,000,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525286135",
                            "link": "tel:+971525286135",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "pfinquiry2@psiportals.net",
                            "link": "mailto:pfinquiry2@psiportals.net"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525286135",
                            "link": "tel:+971525286135",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "pfinquiry2@psiportals.net",
                            "link": "mailto:pfinquiry2@psiportals.net"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "5951632",
            "attributes": {
                "name": "Cozy 2+M w/ Parking space and Facilities",
                "area": "1,500 sqft",
                "size": 1500,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "AP30700",
                "rera": "",
                "price_on_application": false,
                "default_price": 1550000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 1319,
                "agent_id": 128815,
                "smart_ad": true,
                "cts": false,
                "listing_level_label": "smart_ad",
                "listing_level": "premium",
                "bathroom_value": 2,
                "bathroom_name": "2",
                "bedroom_value": 2,
                "bedroom_name": "2",
                "location_tree_path": "The Gate Tower 2, Shams Abu Dhabi, Al Reem Island, Abu Dhabi",
                "serp_score": 93,
                "quality_score": 100,
                "view_360": "https://tour.getlookaround.com/XoqRsGTZjqc",
                "rsp": 93,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reem-island-shams-abu-dhabi-the-gate-tower-2-5951632.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%85-%D8%B4%D9%85%D8%B3-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D8%A8%D8%B1%D8%AC-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-2-5951632.html",
                "image_property": "//staging.propertyfinder.ae/property/4625371ba532d38a9ad9e16a821453d8/500/356/MODE/21d40f/5951632-01539o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/10/178/98/MODE/f2a043/1319-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in The Gate Tower 2, Shams Abu Dhabi",
                "price": 1550000,
                "price_text": "1,550,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971528432729",
                            "link": "tel:+971528432729",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "marketing@ugp.ae",
                            "link": "mailto:marketing@ugp.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6072599",
            "attributes": {
                "name": "Fantastic  2 bedroom in Bay Central West",
                "area": "1,100 sqft",
                "size": 1100,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "AB-S-2124",
                "rera": "1572533844",
                "price_on_application": false,
                "default_price": 2150000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 1141,
                "agent_id": 137212,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "standard",
                "listing_level": "standard",
                "bathroom_value": 3,
                "bathroom_name": "3",
                "bedroom_value": 2,
                "bedroom_name": "2",
                "location_tree_path": "Bay Central West, Bay Central, Dubai Marina, Dubai",
                "serp_score": 92.989999999999995,
                "quality_score": 99.980000000000004,
                "view_360": "https://ogulo.com/?2M5DiFzXMbfXZemd",
                "rsp": 92.989999999999995,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-dubai-dubai-marina-bay-central-bay-central-west-6072599.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AF%D8%A8%D9%8A-%D9%85%D8%A7%D8%B1%D9%8A%D9%86%D8%A7-%D8%A8%D8%A7%D9%8A-%D8%B3%D9%86%D8%AA%D8%B1%D8%A7%D9%84-%D8%A8%D8%A7%D9%8A-%D8%B3%D9%86%D8%AA%D8%B1%D8%A7%D9%84-%D8%BA%D8%B1%D8%A8-6072599.html",
                "image_property": "//staging.propertyfinder.ae/property/53a482bbb1d1394717ff55b52f7fdebb/500/356/MODE/020900/6072599-2f3b5o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/2/178/98/MODE/ad59c5/1141-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Bay Central West, Bay Central",
                "price": 2150000,
                "price_text": "2,150,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971565775168",
                            "link": "tel:+971565775168",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "julia@abodeproperty.ae",
                            "link": "mailto:julia@abodeproperty.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971565775168",
                            "link": "tel:+971565775168",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971565775168",
                            "link": "sms:+971565775168"
                        },
                        "email": {
                            "type": "email",
                            "value": "julia@abodeproperty.ae",
                            "link": "mailto:julia@abodeproperty.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6165753",
            "attributes": {
                "name": "Ready to Move In|Back to Back 4BR |Hayat",
                "area": "2,356 sqft",
                "size": 2356,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "HL-S-7088",
                "rera": "1261730961",
                "price_on_application": false,
                "default_price": 1750000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 22,
                "type_identifier": "townhouse",
                "broker_id": 568,
                "agent_id": 120690,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 4,
                "bedroom_name": "4",
                "location_tree_path": "Hayat Townhouses 1, Hayat Townhouses, Town Square, Dubai",
                "serp_score": 92.989999999999995,
                "quality_score": 99.980000000000004,
                "view_360": "https://h4l.me/360/hayat1",
                "rsp": 92.989999999999995,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/townhouse-for-sale-dubai-town-square-hayat-townhouses-hayat-townhouses-1-6165753.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AA%D8%A7%D9%88%D9%86-%D8%B3%D9%83%D9%88%D8%A7%D8%B1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-6165753.html",
                "image_property": "//staging.propertyfinder.ae/property/7cfc5ce3485d50cc326fbfe87c73692c/500/356/MODE/057840/6165753-bb111o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/7/178/98/MODE/3fdcc0/568-logo.jpg"
            },
            "meta": {
                "subtitle": "Townhouse for Sale in Hayat Townhouses 1, Hayat Townhouses",
                "price": 1750000,
                "price_text": "1,750,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971568188610",
                            "link": "sms:+971568188610"
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6068407",
            "attributes": {
                "name": "Low Priced! 5BR+Pool Mediterranean Villa",
                "area": "3,750 sqft",
                "size": 3750,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "FC-S-18024",
                "rera": "",
                "price_on_application": false,
                "default_price": 2400000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 35,
                "type_identifier": "villa",
                "broker_id": 914,
                "agent_id": 134136,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "standard",
                "listing_level": "standard",
                "bathroom_value": 6,
                "bathroom_name": "6",
                "bedroom_value": 5,
                "bedroom_name": "5",
                "location_tree_path": "Mediterranean Style, Al Reef Villas, Al Reef, Abu Dhabi",
                "serp_score": 92.969999999999999,
                "quality_score": 99.959999999999994,
                "view_360": "https://fcprop.net/360_Tours/Al_Reef_Village/Mediterranean_Village/5_Bedroom_Villa_Mediterranean_Village_Al_Reef/index.html",
                "rsp": 92.969999999999999,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/villa-for-sale-abu-dhabi-al-reef-al-reef-villas-mediterranean-style-6068407.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D9%81%D9%8A%D9%84%D8%A7-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D9%81%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%B7%D8%B1%D8%A7%D8%B2-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%B3%D8%B7-6068407.html",
                "image_property": "//staging.propertyfinder.ae/property/fe28e540ef4930d887ffc8c84dc4f38e/500/356/MODE/d9f008/6068407-ce38bo.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/3/178/98/MODE/a0bed1/914-logo.jpg"
            },
            "meta": {
                "subtitle": "Villa for Sale in Mediterranean Style, Al Reef Villas",
                "price": 2400000,
                "price_text": "2,400,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525220843",
                            "link": "tel:+971525220843",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "ivana@fcprop.net",
                            "link": "mailto:ivana@fcprop.net"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525220843",
                            "link": "tel:+971525220843",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971507522578",
                            "link": "sms:+971507522578"
                        },
                        "email": {
                            "type": "email",
                            "value": "ivana@fcprop.net",
                            "link": "mailto:ivana@fcprop.net"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6105710",
            "attributes": {
                "name": "Invest a Property in Reef.Call us for info",
                "area": "2,858 sqft",
                "size": 2858,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "FC-S-24330",
                "rera": "",
                "price_on_application": false,
                "default_price": 2100000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 35,
                "type_identifier": "villa",
                "broker_id": 914,
                "agent_id": 142044,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 5,
                "bathroom_name": "5",
                "bedroom_value": 4,
                "bedroom_name": "4",
                "location_tree_path": "Arabian Style, Al Reef Villas, Al Reef, Abu Dhabi",
                "serp_score": 92.930000000000007,
                "quality_score": 99.620000000000005,
                "view_360": "https://fcprop.net/360_Tours/Al_Reef_Village/Arabian_Village/4_Bedroom_Villa_Arabian_Village_Al_Reef/index.html",
                "rsp": 92.930000000000007,
                "rss": 68.700000000000003
            },
            "links": {
                "self": "/en/buy/villa-for-sale-abu-dhabi-al-reef-al-reef-villas-arabian-style-6105710.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D9%81%D9%8A%D9%84%D8%A7-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D9%81%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%B7%D8%B1%D8%A7%D8%B2-%D8%B9%D8%B1%D8%A8%D9%8A-6105710.html",
                "image_property": "//staging.propertyfinder.ae/property/3acdfa492898161b72ef9052b39505ed/500/356/MODE/bdba39/6105710-6384co.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/3/178/98/MODE/a0bed1/914-logo.jpg"
            },
            "meta": {
                "subtitle": "Villa for Sale in Arabian Style, Al Reef Villas",
                "price": 2100000,
                "price_text": "2,100,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522207133",
                            "link": "tel:+971522207133",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "fatima@fcprop.net",
                            "link": "mailto:fatima@fcprop.net"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522207133",
                            "link": "tel:+971522207133",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971507522578",
                            "link": "sms:+971507522578"
                        },
                        "email": {
                            "type": "email",
                            "value": "fatima@fcprop.net",
                            "link": "mailto:fatima@fcprop.net"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6070570",
            "attributes": {
                "name": "Excelleny Property Investment.Type A flat",
                "area": "1,231 sqft",
                "size": 1231,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "FC-S-18402",
                "rera": "",
                "price_on_application": false,
                "default_price": 930000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 914,
                "agent_id": 134136,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 3,
                "bathroom_name": "3",
                "bedroom_value": 2,
                "bedroom_name": "2",
                "location_tree_path": "Tower 28, Al Reef Downtown, Al Reef, Abu Dhabi",
                "serp_score": 92.849999999999994,
                "quality_score": 99.780000000000001,
                "view_360": "https://fcprop.net/360_Tours/Al_Reef_Village/Downtown/2_Bedroom_Apartment_Al_Reef_Downtown/index.html",
                "rsp": 92.849999999999994,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-abu-dhabi-al-reef-al-reef-downtown-tower-28-6070570.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%AF%D8%A7%D9%88%D9%86-%D8%AA%D8%A7%D9%88%D9%86-%D8%A8%D8%B1%D8%AC-28-6070570.html",
                "image_property": "//staging.propertyfinder.ae/property/cb74fe2c88e1f4f3737abc7704d27338/500/356/MODE/9049e3/6070570-f54c1o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/3/178/98/MODE/a0bed1/914-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Tower 28, Al Reef Downtown",
                "price": 930000,
                "price_text": "930,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525220843",
                            "link": "tel:+971525220843",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "ivana@fcprop.net",
                            "link": "mailto:ivana@fcprop.net"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971525220843",
                            "link": "tel:+971525220843",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971507522578",
                            "link": "sms:+971507522578"
                        },
                        "email": {
                            "type": "email",
                            "value": "ivana@fcprop.net",
                            "link": "mailto:ivana@fcprop.net"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6154248",
            "attributes": {
                "name": "Burj Khalifa View from Bed and Living Room",
                "area": "900 sqft",
                "size": 900,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "AP-SF-17099",
                "rera": "20598",
                "price_on_application": false,
                "default_price": 1799000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 632,
                "agent_id": 118788,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 2,
                "bathroom_name": "2",
                "bedroom_value": 1,
                "bedroom_name": "1",
                "location_tree_path": "Index Tower, Gate Boulevard, DIFC, Dubai",
                "serp_score": 92.849999999999994,
                "quality_score": 99.359999999999999,
                "view_360": "https://www.astonpearlre.com/landing/360/AP-S-17099/",
                "rsp": 92.849999999999994,
                "rss": 68.799999999999997
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-dubai-difc-gate-boulevard-index-tower-6154248.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D9%85%D8%B1%D9%83%D8%B2-%D8%AF%D8%A8%D9%8A-%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D8%A8%D9%88%D9%84%D9%8A%D9%81%D8%A7%D8%B1%D8%AF-%D8%A8%D8%B1%D8%AC-%D8%A5%D9%86%D8%AF%D9%83%D8%B3-6154248.html",
                "image_property": "//staging.propertyfinder.ae/property/79e958826a1c866432f858cbfe424342/500/356/MODE/9a5a33/6154248-cc0c0o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/12/178/98/MODE/e7863a/632-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Index Tower, Gate Boulevard",
                "price": 1799000,
                "price_text": "1,799,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971509376062",
                            "link": "tel:+971509376062",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "anna@astonpearlre.com",
                            "link": "mailto:anna@astonpearlre.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971509376062",
                            "link": "tel:+971509376062",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509376062",
                            "link": "sms:+971509376062"
                        },
                        "email": {
                            "type": "email",
                            "value": "anna@astonpearlre.com",
                            "link": "mailto:anna@astonpearlre.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "5505618",
            "attributes": {
                "name": "Unique Penthouse with Full Marina Views",
                "area": "1,350 sqft",
                "size": 1350,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "RR-S-352862",
                "rera": "22159",
                "price_on_application": false,
                "default_price": 2550000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 1,
                "type_identifier": "apartment",
                "broker_id": 902,
                "agent_id": 146919,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 3,
                "bathroom_name": "3",
                "bedroom_value": 2,
                "bedroom_name": "2",
                "location_tree_path": "Silverene Tower B, Silverene, Dubai Marina, Dubai",
                "serp_score": 92.799999999999997,
                "quality_score": 99.709999999999994,
                "view_360": "https://my.matterport.com/show/?m=cfu5YsAfxJo",
                "rsp": 92.799999999999997,
                "rss": 68.5
            },
            "links": {
                "self": "/en/buy/apartment-for-sale-dubai-dubai-marina-silverene-silverene-tower-b-5505618.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%B4%D9%82%D8%A9-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AF%D8%A8%D9%8A-%D9%85%D8%A7%D8%B1%D9%8A%D9%86%D8%A7-%D8%B3%D9%8A%D9%84%D9%81%D9%8A%D8%B1%D9%8A%D9%86-b-%D8%A8%D8%B1%D8%AC-%D8%B3%D9%8A%D9%84%D9%81%D8%B1%D9%8A%D9%86-5505618.html",
                "image_property": "//staging.propertyfinder.ae/property/41652cf5b774b3503371015306cc32e0/500/356/MODE/7353b4/5505618-833cbo.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/3/178/98/MODE/44de46/902-logo.jpg"
            },
            "meta": {
                "subtitle": "Apartment for Sale in Silverene Tower B, Silverene",
                "price": 2550000,
                "price_text": "2,550,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971509210564",
                            "link": "tel:+971509210564",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "jamie@residencedubai.com",
                            "link": "mailto:jamie@residencedubai.com"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971509210564",
                            "link": "tel:+971509210564",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971509210564",
                            "link": "sms:+971509210564"
                        },
                        "email": {
                            "type": "email",
                            "value": "jamie@residencedubai.com",
                            "link": "mailto:jamie@residencedubai.com"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6100288",
            "attributes": {
                "name": "Rental Price decreased.Call us for viewing",
                "area": "2,856 sqft",
                "size": 2856,
                "size_unit": "sqft",
                "price_period_label": "Yearly",
                "price_period_identifier": "yearly",
                "offering_type": "Residential for Rent",
                "offering_type_id": 2,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "FC-R-7575",
                "rera": "",
                "price_on_application": false,
                "default_price": 145000,
                "category_id": 2,
                "category_identifier": "rent",
                "type_id": 35,
                "type_identifier": "villa",
                "broker_id": 914,
                "agent_id": 142044,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 5,
                "bathroom_name": "5",
                "bedroom_value": 4,
                "bedroom_name": "4",
                "location_tree_path": "Arabian Style, Al Reef Villas, Al Reef, Abu Dhabi",
                "serp_score": 92.689999999999998,
                "quality_score": 99.560000000000002,
                "view_360": "https://fcprop.net/360_Tours/Al_Reef_Village/Arabian_Village/4_Bedroom_Villa_Arabian_Village_Al_Reef/index.html",
                "rsp": 92.689999999999998,
                "rss": 68.5
            },
            "links": {
                "self": "/en/rent/villa-for-rent-abu-dhabi-al-reef-al-reef-villas-arabian-style-6100288.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1/%D9%81%D9%8A%D9%84%D8%A7-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A3%D8%A8%D9%88%D8%B8%D8%A8%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D9%81%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%8A%D9%81-%D8%B7%D8%B1%D8%A7%D8%B2-%D8%B9%D8%B1%D8%A8%D9%8A-6100288.html",
                "image_property": "//staging.propertyfinder.ae/property/6934da6818ec329b145aa78f8f1f2055/500/356/MODE/c6a9c6/6100288-1c3ffo.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/3/178/98/MODE/a0bed1/914-logo.jpg"
            },
            "meta": {
                "subtitle": "Villa for Rent in Arabian Style, Al Reef Villas",
                "price": 145000,
                "price_text": "145,000 AED/year",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522207133",
                            "link": "tel:+971522207133",
                            "is_did": true
                        },
                        "email": {
                            "type": "email",
                            "value": "fatima@fcprop.net",
                            "link": "mailto:fatima@fcprop.net"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971522207133",
                            "link": "tel:+971522207133",
                            "is_did": true
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971507522578",
                            "link": "sms:+971507522578"
                        },
                        "email": {
                            "type": "email",
                            "value": "fatima@fcprop.net",
                            "link": "mailto:fatima@fcprop.net"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6153454",
            "attributes": {
                "name": "Family Community|3BR TH|Hayat by NSHAMA",
                "area": "2,221 sqft",
                "size": 2221,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": true,
                "verified": true,
                "featured": false,
                "furnished": "NO",
                "reference": "HL-S-7065",
                "rera": "0728415417",
                "price_on_application": false,
                "default_price": 1500000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 22,
                "type_identifier": "townhouse",
                "broker_id": 568,
                "agent_id": 120690,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "premium",
                "listing_level": "premium",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 3,
                "bedroom_name": "3",
                "location_tree_path": "Hayat Townhouses 1, Hayat Townhouses, Town Square, Dubai",
                "serp_score": 92.670000000000002,
                "quality_score": 99.810000000000002,
                "view_360": "https://h4l.me/360/hayat1",
                "rsp": 92.670000000000002,
                "rss": 68.299999999999997
            },
            "links": {
                "self": "/en/buy/townhouse-for-sale-dubai-town-square-hayat-townhouses-hayat-townhouses-1-6153454.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AA%D8%A7%D9%88%D9%86-%D8%B3%D9%83%D9%88%D8%A7%D8%B1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-6153454.html",
                "image_property": "//staging.propertyfinder.ae/property/2ddcecae0ba5ee0f0186860f9ac7769e/500/356/MODE/febb6b/6153454-efe2do.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/7/178/98/MODE/3fdcc0/568-logo.jpg"
            },
            "meta": {
                "subtitle": "Townhouse for Sale in Hayat Townhouses 1, Hayat Townhouses",
                "price": 1500000,
                "price_text": "1,500,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971568188610",
                            "link": "sms:+971568188610"
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    }
                },
                "images_count": 10
            }
        },
        {
            "type": "property",
            "id": "6153743",
            "attributes": {
                "name": "Affordable Brand  New 3 BR TH  in Hayat",
                "area": "2,213 sqft",
                "size": 2213,
                "size_unit": "sqft",
                "price_period_label": "AED",
                "price_period_identifier": "sell",
                "offering_type": "Residential for Sale",
                "offering_type_id": 1,
                "premium": false,
                "verified": true,
                "featured": true,
                "furnished": "NO",
                "reference": "HL-S-7069",
                "rera": "1085330882",
                "price_on_application": false,
                "default_price": 1500000,
                "category_id": 1,
                "category_identifier": "buy",
                "type_id": 22,
                "type_identifier": "townhouse",
                "broker_id": 568,
                "agent_id": 120690,
                "smart_ad": false,
                "cts": false,
                "listing_level_label": "featured",
                "listing_level": "featured",
                "bathroom_value": 4,
                "bathroom_name": "4",
                "bedroom_value": 3,
                "bedroom_name": "3",
                "location_tree_path": "Hayat Townhouses 1, Hayat Townhouses, Town Square, Dubai",
                "serp_score": 92.670000000000002,
                "quality_score": 99.810000000000002,
                "view_360": "https://h4l.me/360/hayat1",
                "rsp": 92.670000000000002,
                "rss": 68.299999999999997
            },
            "links": {
                "self": "/en/buy/townhouse-for-sale-dubai-town-square-hayat-townhouses-hayat-townhouses-1-6153743.html",
                "self_alternate": "/ar/%D9%84%D9%84%D8%A8%D9%8A%D8%B9/%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D8%AF%D8%A8%D9%8A-%D8%AA%D8%A7%D9%88%D9%86-%D8%B3%D9%83%D9%88%D8%A7%D8%B1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-1-%D8%AD%D9%8A%D8%A7%D8%A9-%D8%AA%D8%A7%D9%88%D9%86-%D9%87%D8%A7%D9%88%D8%B3-6153743.html",
                "image_property": "//staging.propertyfinder.ae/property/6cc23ffbf10f916dadbf636556fb0c22/500/356/MODE/c06e9a/6153743-29800o.jpg",
                "image_broker": "//staging.propertyfinder.ae/broker/7/178/98/MODE/3fdcc0/568-logo.jpg"
            },
            "meta": {
                "subtitle": "Townhouse for Sale in Hayat Townhouses 1, Hayat Townhouses",
                "price": 1500000,
                "price_text": "1,500,000 AED",
                "contact_options": {
                    "list": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    },
                    "details": {
                        "phone": {
                            "type": "phone",
                            "value": "+971568188610",
                            "link": "tel:+971568188610",
                            "is_did": false
                        },
                        "sms": {
                            "type": "sms",
                            "value": "+971568188610",
                            "link": "sms:+971568188610"
                        },
                        "email": {
                            "type": "email",
                            "value": "paresh@homes4life.ae",
                            "link": "mailto:paresh@homes4life.ae"
                        }
                    }
                },
                "images_count": 10
            }
        }
    ],
    "meta": {
        "total_count": 109296,
        "page_count": 5465,
        "page": 1,
        "per_page": 20
    }
}

export function* propertiesSaga(action) {
    try {
        const URL = yield call(PropertyApiService.dataFilter, action.payload);
        const res = yield call(ApiRequestService, URL);
        console.log(res, 'res')
        yield put(loadPropertySuccess(res));
    } catch (err) {
        console.log(err)
    }
}


