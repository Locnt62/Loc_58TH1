/* Two way binding giữa các component map, result-block, search-block */
export enum DetailPopupStatusType {
    _ITEM_INFORMATION,
    _ESTIMATE_RESULT,
}
export interface ShareData {
    sidebarLeftMenu: {
        isOpen: boolean
    },
    searchForm: {
        isOpen: boolean
    }
    resultBlock: {
        isOpen: boolean,
        bdsInfoIsLoading: boolean,
        detailPopupStatus?: DetailPopupStatusType,
        tabIndex: number,
        positionResultBlockScroll: number
    }
}
export interface SnowPlowTrackerType {
    schema_type: string,
    page_url?: string,
    timestamp?: string,
    finger:string,
    referer_url?: string,
    user_id?: number,
    user_name?: string,
    full_name?: string,
    houseId?: number,
    streetId?: number,
    wardId?: number,
    districtId?: number,
    cityId?: number,
    projectId?: number,
    bds_id?: number,
    bds_name?: string,
    property_type?: string,
    property_search_content?: string,
    property_search_type?: string,
    advanced_search_city?: string,
    advanced_search_district?: string,
    advanced_search_ward?: string,
    advanced_search_group?: string,
    advanced_search_street?: string,
    advanced_search_lane?: string,
    advanced_search_alley?: string,
    advanced_search_house_number?: string,
    advanced_search_lat?: number,
    advanced_search_lon?: number,


    street_id?: number, // 124,
    street_name?: string, // 124,
    ward_id?: number, // 124,
    ward_name?: string,
    district_id?: number, // 124,
    district_name?: string,
    city_id?: number, // 124,
    city_name?: string
    project_id?: number, // 124,
    project_name?: string,

    huong_nha_id?: number, // 12,       
    hinh_dang_lo_dat_id?: number, // 12,
    loai_nha_id?: number, // 12,
    loai_bat_dong_san_id?: number, // 12,
    so_tang?: number, // 12,
    vi_tri?: number, // 12,
    dien_tich?: number, // 105.5,
    mat_tien?: number, // 5.5, 
    khoang_cach_duong_oto?: number, // 3.5,    
    be_rong_via_he?: number, // 3.5,
    chieu_rong_mat_duong?: number, // 3.5,
    nam_xay_dung?: number, // 2010,
    gia_estimate_ctxd?: number, // 12.5, # tong gia tri (ti)
    gia_estimate_dat?: number, // 12.5, # tong gia tri (ti)
    gia_khach_hang_nhap?: number, // 12.5,
    so_to_ban_do?: number, // 12,
    so_thua_ban_do?: number, // 12,
    thua_dat_id?: number, // 12,
    gia_thue_trung_binh?: number, // 12.5,
    gia_ban_trung_binh?: number, // 12.5
}
