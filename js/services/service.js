const postData = async (url, data) => { // настраивает наш запрос дата -  данные которые будут поститься 
    const res = await fetch(url, {//фетчит(посылает запрос на сервер)//await говорит что нужно дождаться запроса
        method: "POST",
        headers: {
            'Content-Type': 'application/json'//это все асинхр код ,он не будет ждать весь код и не знаем время ответа
        },
        body: data
    });

    return await res.json();// возврат промиса (ответа) из ф-ции postdata ,поэтому также доб. await
};

const getResource = async (url) => { // удалил дату и объекта настроек(ничего не отправляю на сервер )
    const res = await fetch(url);
    if (!res.ok){//объект ошибки если фетч сломается
    throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export {postData};
export {getResource};