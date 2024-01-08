export default function Divider({ heading, mt, mb }: { heading: string, mt: string, mb: string }) {
    return (
        <div className={`w-screen flex flex-row items-center justify-center text-center mt-4 mb-${mb}`} style={{ marginBottom: mb, marginTop: mt }}>
            <div className="w-[15%] border-0 border-white border-t-4 border-dashed m-4 sm:w-[25%] lg:w-[30%]"></div>
            <div className=" text-white text-[16px] font-bold font-['Space Grotesk'] sm:text-[20px] lg:[32px]">{heading}</div>
            <div className="w-[15%] border-0 border-white border-t-4 border-dashed m-4 sm:w-[25%] lg:w-[30%]"></div>
        </div >
    );
}//mt-[${mt}] mb-[${mb}]