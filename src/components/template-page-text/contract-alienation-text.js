import React from 'react';
import * as jsPDF from 'jspdf'


const ContractAlienationText = ({data}) =>{
    const {number, city, day, month, year, 
        name_organ, address_organ, name_1, name_2, 
        address_1, address_doc_1, address_2, address_doc_2, 
        pasport_num_1, pasport_num_2, pasport_from_2, 
        pasport_regist_2
    } = data;
    return(
        <div className="template">
          <p align="center">
    ДОГОВОР
</p>
<p align="center">
    ОБ ОТЧУЖДЕНИИ ИСКЛЮЧИТЕЛЬНОГО ПРАВА
</p>
<table border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="399" valign="top">
                <p>
                    г. _________
                </p>
            </td>
            <td width="399" valign="top">
                <p align="right">
                    __ _______ 20__ года
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p>
    _____________________________________________________________, именуемое в
    дальнейшем «Правообладатель», в лице _________________
    _____________________, действующего на основании ________________, с одной
    стороны, и ______________________________________________, в лице
    ____________________________ ____________________________, действующего на
    основании ________________, именуемое в дальнейшем «Правопреемник», с
    другой стороны, в дальнейшем совместно именуемые Стороны, заключили
    настоящий договор о нижеследующем:
</p>
<p align="center">
    1.       ПРЕДМЕТ ДОГОВОРА
</p>
<p>
    1.1.         Правообладатель, обладающий исключительным правом на товарные
знаки по свидетельствам №    <strong>_________________ <em>«Товарный знак»</em>,</strong> заявка №
___________, приоритет от __ _______ _____ <em>(дата)</em>. и №    <strong>___________________ <em>«Товарный знак»</em></strong>, заявка №
    ________________, приоритет от __ _______ _____ <em>(дата)</em>. (далее по
    тексту договора – Товарные знаки), уступает, а Правопреемник принимает
    исключительное право на Товарные знаки в отношении всех товаров и услуг,
    указанных в свидетельствах.
</p>
<p>
    1.2.         Исключительное право на Товарные знаки, передаваемое
    Правообладателем, представляет собой исключительное право пользования
    Товарными знаками и распоряжения ими.
</p>
<p align="center">
    2.       ПРАВА И ОБЯЗАННОСТИ СТОРОН
</p>
<p>
    2.1.         Правообладатель обязан передать Правопреемнику исключительное
    право на Товарные знаки в объеме, указанном в настоящем договоре, и в
    соответствии с действующим законодательством РФ.
</p>
<p>
    2.2.         Правообладатель подтверждает, что к моменту заключения
    настоящего договора право пользования Товарными знаками или исключительные
    права на Товарные знаки третьим лицам не переданы.
</p>
<p>
    2.3.         С момента получения уведомления о регистрации настоящего
    договора в Федеральной службе по интеллектуальной собственности, патентам и
    товарным знакам, Правообладатель обязан прекратить любое использование
    Товарных знаков.
</p>
<p>
    2.4.         Правопреемник обязан уплатить Правообладателю вознаграждение
    за уступку Товарных знаков в размере и сроки, указанные в разделе 3
    настоящего договора.
</p>
<p>
    2.5.         Все расходы, связанные с регистрацией настоящего договора в
    Федеральной службе по интеллектуальной собственности патентам и товарным
    знакам несет Правопреемник.
</p>
<p align="center">
    3.       РАСЧЕТЫ ПО ДОГОВОРУ
</p>
<p>
    3.1.         За уступку Товарного знака по свидетельству № __________
    Правопреемник оплачивает Правообладателю вознаграждение в размере
    ___________ рублей 00 копеек, в том числе НДС - 18%. За уступку товарного
    знака по свидетельству № ____________ Правопреемник оплачивает
    Правообладателю вознаграждение в размере ____________ рублей 00 копеек, в
    том числе НДС - 18%.
</p>
<p>
    3.2.         Сумма, указанная в п. 3.1 настоящего договора, оплачивается
    Правопреемником в течение пяти банковских дней с даты получения Уведомления
    о регистрации договора путем перечисления денежных средств на расчетный
    счет Правообладателя.
</p>
<p align="center">
    4.       ОТВЕТСТВЕННОСТЬ СТОРОН
</p>
<p>
    4.1.         Сторона, не исполнившая или ненадлежащим образом исполнившая
    обязательства по настоящему договору, обязана возместить другой стороне
    причиненные таким неисполнением убытки.
</p>
<p align="center">
    5.       КОНФИДЕНЦИАЛЬНОСТЬ
</p>
<p>
    5.1.         Условия настоящего договора конфиденциальны и не подлежат
    разглашению.
</p>
<p align="center">
    6.       РАЗРЕШЕНИЕ СПОРОВ
</p>
<p>
    6.1.         В случае возникновения споров между Правообладателем и
    Правопреемником по вопросам, предусмотренным настоящим договором, или в
    связи с ним, Стороны примут все меры к их разрешению путем переговоров.
</p>
<p>
    6.2.         При невозможности разрешения споров и разногласий путем
    переговоров они разрешаются в установленном российским законодательством
    порядке.
</p>
<p align="center">
    7.       ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
</p>
<p>
    <strong></strong>
</p>
<p>
    7.1.         Все изменения и дополнения вносятся в настоящий Договор по
    соглашению сторон в письменном виде.
</p>
<p>
    7.2.         Все переговоры, предшествующие подписанию настоящего Договора,
    теряют силу с момента его подписания.
</p>
<p>
    7.3.         На дату подписания настоящего Договора Правообладатель
    предоставил Правопреемнику полную и исчерпывающую информацию, касающуюся
    предмета настоящего Договора.
</p>
<p>
    7.4.         Договор не может быть отозван в период его регистрации в
    Роспатенте какой-либо из Сторон без письменного согласия второй стороны.
</p>
<p>
    7.5.         Настоящий договор вступает в силу с момента его регистрации в
    Федеральной службе по интеллектуальной собственности, патентам и товарным
    знакам и действует на всей территории Российской Федерации.
</p>
<p>
    7.6.         С момента регистрации настоящего договора к Правопреемнику
    переходит исключительное право на Товарные знаки.
</p>
<p>
    7.7.         Настоящий договор заключен 01 апреля 2008г. г. в 3-х
    экземплярах, имеющих одинаковую юридическую силу, по одному экземпляру для
    каждой Стороны и один экземпляр для Федеральной службы по интеллектуальной
    собственности, патентам и товарным знакам.
</p>
<p align="center">
    АДРЕСА И РЕКВИЗИТЫ СТОРОН
</p>
<table border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="394" valign="top">
                <p>
                    Правообладатель:
                </p>
                <p>
                    ________________________________________________________________________________________________________________________________________
                </p>
                <p>
                    Адрес: ____________________________
                    __________________________________
                </p>
                <p>
                    ОГРН _____________________________
                </p>
                <p>
                    ИНН __________ КПП ______________
                </p>
                <p>
                    р/с _______________________________
                </p>
                <p>
                    ______________________ <em>(наименование банка)</em>
                </p>
                <p>
                    к/с _______________________________
                </p>
                <p>
                    БИК ______________________________
                </p>
                <p>
                    Телефон __________________________
                </p>
                <p>
                    Факс _____________________________
                </p>
                <p>
                    Е-mail ____________________________
                </p>
                <p>
                    Web-сайт _________________________
                </p>
            </td>
            <td width="394" valign="top">
                <p>
                    Правопреемник:
                </p>
                <p>
                    ________________________________________________________________________________________________________________________________________
                </p>
                <p>
                    Адрес: ____________________________
                    __________________________________
                </p>
                <p>
                    ОГРН _____________________________
                </p>
                <p>
                    ИНН __________ КПП ______________
                </p>
                <p>
                    р/с _______________________________
                </p>
                <p>
                    ______________________ <em>(наименование банка)</em>
                </p>
                <p>
                    к/с _______________________________
                </p>
                <p>
                    БИК ______________________________
                </p>
                <p>
                    Телефон __________________________
                </p>
                <p>
                    Факс _____________________________
                </p>
                <p>
                    Е-mail ____________________________
                </p>
                <p>
                    Web-сайт _________________________
                </p>
            </td>
        </tr>
    </tbody>
</table>
<p align="center">
    ПОДПИСИ СТОРОН
</p>
<table border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="394" valign="top">
                <p>
                    От имени Правообладателя:
                </p>
                <p>
                    ____________________ <em>(Наименование должности)</em>
                </p>
                <p>
                    ________________ _________________
                </p>
                <p>
                    <em>
                                          Подпись                           /Ф.
                        И.О./
                    </em>
                </p>
                <p>
                    М.П.
                </p>
            </td>
            <td width="394" valign="top">
                <p>
                    От имени Правопреемника:
                </p>
                <p>
____________________<em> </em>                    <em>(Наименование должности)</em>
                </p>
                <p>
                    ________________ _________________
                </p>
                <p>
                    <em>
                                          Подпись                           /Ф.
                        И.О./
                    </em>
                </p>
                <p>
                    М.П.
                </p>
            </td>
        </tr>
    </tbody>
</table>
</div>
    )
}

let doc = new jsPDF()
doc.text('Hello', 10, 10);

export default ContractAlienationText;