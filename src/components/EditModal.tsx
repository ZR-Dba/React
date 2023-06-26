import { useState } from "react";



function EditModal() {
    const [selectedLanguge, setSelectedLanguage] = useState("en")
    const [valueBySelectedLanguge, setValueBySeSelectedLanguage] = useState("")

    function setValueForSelectedLanguge(language: string) {
        setSelectedLanguage(language)
        const found: any = langVal.find(x => x.languge === selectedLanguge)
        console.log('found', found)
        if (found) {
            setValueBySeSelectedLanguage(found['value'])
        }
    }
    function updateValue(value: string) {
        setValueBySeSelectedLanguage(value)
        const langv = langVal
        const found: any = langVal.find(x => x.languge === selectedLanguge)
        if (found) {
            let deletedItem = langVal.filter(x => x.languge !== selectedLanguge)
            deletedItem.push({
                languge: selectedLanguge,
                value: value
            })
        }
    }
    const [langVal, setLangVal] = useState([{
        languge: "english",
        value: "en"
    },
    {
        languge: "persian",
        value: "per"
    },
    {
        languge: "chiness",
        value: "chi"
    },
    {
        languge: "russian",
        value: "rus"
    }])
    function setFromValue() {

    }
    return (
        <div className="modal fade" id="showModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">ویرایش کشور</h5>
                        <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form className="row g-3 p-3">
                        <div className="col-md-6">
                            <label htmlFor="countryName" className="form-label">انتخاب زبان</label>
                            <select onChange={e => setValueForSelectedLanguge(e.target.value)} className="form-select" id="countryName">
                                {langVal.map(item => <option key={item.languge} value={item.languge}>{item.languge}</option>)}
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="countryName" className="form-label">نام کشور</label>
                            <input onChange={e => updateValue(e.target.value)} value={valueBySelectedLanguge} type="text" className="form-control" id="countryName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="isoCode" className="form-label">ایزو کد</label>
                            <input type="text" className="form-control" id="isoCode" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="flag" className="form-label">پرچم</label>
                            <input type="text" className="form-control" id="flag" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="phoneCode" className="form-label">کد تلفن</label>
                            <input type="text" className="form-control" id="phoneCode" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="currency" className="form-label">واحد پول</label>
                            <input type="text" className="form-control" id="currency" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="latitude" className="form-label">عرض جغرافیایی</label>
                            <input type="text" id="latitude" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="longitude" className="form-label">طول جغرافیایی</label>
                            <input type="text" id="longitude" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="zoneName" className="form-label">منطقه زمانی</label>
                            <input type="text" id="zoneName" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="gmtOffset" className="form-label">آفست</label>
                            <input type="number" id="gmtOffset" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="gmtOffsetname" className="form-label">نام آفست</label>
                            <input type="text" id="gmtOffsetname" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="abbreviation" className="form-label">علامت اختصاری</label>
                            <input type="text" id="abbreviation" className="form-control" />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="tzName" className="form-label">tz</label>
                            <input type="text" id="tzName" className="form-control" />
                        </div>

                    </form>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">لغو</button>
                        <button type="button" className="btn btn-primary">دخیره تغییرات</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditModal;
