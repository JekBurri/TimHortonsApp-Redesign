export default function QRCode() {
  return (
    <div className="flex justify-between">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <img
          className="w-auto"
          src="/QRCode.png"
          alt="qrcode to scan for points"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 flex-1 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <p className="text-2xl font-bold text-red-600 mb-2">
              Scan Type
            </p>
            <div className="flex items-center">
              <label className="mr-4 cursor-pointer">
                <input type="radio" name="pointsOption" className="hidden" />
                <div className="border rounded-full w-16 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
                  <span className="text-sm font-semibold">Bank</span>
                </div>
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="pointsOption" className="hidden" />
                <div className="border rounded-full w-16 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
                  <span className="text-sm font-semibold">Redeem</span>
                </div>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-bold text-red-600 mb-2">Scan and Pay</p>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="hidden" />
              <div className="border rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition">
                <span className="text-sm font-semibold">✔</span>
              </div>
              <span className="ml-2">Enable Scan and Pay</span>
            </label>
          </div>

          <p className="text-center text-2xl font-bold text-red-600 shadow-md py-2">
            920 points
          </p>
        </div>
      </div>
    </div>
  );
}
