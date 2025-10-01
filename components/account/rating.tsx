export const Rating = () => {
    return (
        <div
            className="flex items-center justify-between border-[1px] border-[#312E40] h-[51px] rounded-full bg-[#1717178C] gap-2 pl-6 pr-3 py-4 relative"
        >
            <p className="font-golos font-medium text-[16px]">Рейтинг:</p>
            <div className="flex items-center gap-0.5">
                <img alt="purple-star" src="/img/purple-star.svg" />
                <img alt="purple-star" src="/img/purple-star.svg" />
                <img alt="purple-star" src="/img/purple-star.svg" />
                <img alt="purple-star" src="/img/purple-star.svg" />
                <img alt="purple-star" src="/img/transparent-star.svg" />
            </div>
            <div className="relative group">
                <img
                    className="w-[14px] h-[14px]"
                    src="/img/question-logo.svg"
                    alt="question"
                />
                <div
                    className="absolute z-[5] left-[20px] top-[20px] backdrop-blur-3xl w-[325px] text-[14px] text-white rounded-[25px] border-[1px] border-[#312E40] bg-[#1717178C] py-4 px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none"
                >
                    Ваш рейтинг - это ваше соблюдение правил в нашем сервисе, если взяли предмет в аренду и указали что
                    сами отменить трейд, вам нужно самим отменять трейд, если наш бот отменит трейд, ваш рейтинг снизится
                    на 2, когда рейтинг станет 0 = ваш профиль блокируется.
                    <br />
                    <br />
                    Поднять рейтинг можно тем что вы берете предметы в аренду и возвращаете их должным образом который
                    указывали при оплате.
                </div>
            </div>
        </div>
    );
};