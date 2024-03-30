

const Employe = () => {
  return (
    <>
    <section className="px-2 md:px-[4.25rem] max-w-screen md:max-w-[64rem] lg:max-w-[80rem] xl:max-w-[100rem] 2xl:max-w-[130rem] mx-auto py-8 space-y-4">
    <h2 className="px-1 md:px-[4.5rem] font-black leading-8 text-lg md:text-3xl">
        <strong>
        <span className="text-gray-900"> Ranking</span>
        <span className="text-primary-2"> by Employment </span>
        </strong>
    </h2>
    <p className="px-1 md:px-[4.5rem] text-sm text-gray-600 font-[400]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br />
        Lorem Ipsum has been the industry's standard dummy text
    </p>
    <article className="px-2 md:px-14">
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 border rounded">
            <thead className="text-center text-gray-700">
            <tr>
                <th scope="col" className="px-2 py-3">Rank</th>
                <th scope="col" className="px-2 py-3">University</th>
                <th scope="col" className="px-2 py-3">Location</th>
                <th scope="col" className="px-2 py-3">
                MBAmade.com<br />score
                </th>
                <th scope="col" className="px-2 py-3">Employment<br />Score</th>
                <th scope="col" className="px-2 py-3">
                Alumni Network<br />Score
                </th>
                <th scope="col" className="px-2 py-3">
                Carbon Footprint<br />Score
                </th>
                <th scope="col" className="px-2 py-3">Weighted Salary</th>
            </tr>
            </thead>
            <tbody>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                1
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/harvard-university" className="font-semibold text-primary-2">Harvard University</a>
                </td>
                <td className="px-2 py-4">Cambridge, Massachusetts</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">87.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '87%'}} />
                </div>
                </td>
                <td className="px-2 py-4">92.00 %</td>
                <td className="px-2 py-4">78.00 %</td>
                <td className="px-2 py-4">79.00 %</td>
                <td className="px-2 py-4">$ 67000</td>
            </tr>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/stanford-university" className="font-semibold text-primary-2">Stanford University</a>
                </td>
                <td className="px-2 py-4">Stanford, California</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">89.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '89%'}} />
                </div>
                </td>
                <td className="px-2 py-4">91.00 %</td>
                <td className="px-2 py-4">88.00 %</td>
                <td className="px-2 py-4">75.00 %</td>
                <td className="px-2 py-4">$ 45000</td>
            </tr>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                3
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/university-of-pennsylvania-wharton" className="font-semibold text-primary-2">University of Pennsylvania (Wharton)</a>
                </td>
                <td className="px-2 py-4">Philadelphia, Pennsylvania</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">88.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '88%'}} />
                </div>
                </td>
                <td className="px-2 py-4">85.00 %</td>
                <td className="px-2 py-4">71.00 %</td>
                <td className="px-2 py-4">72.00 %</td>
                <td className="px-2 py-4">$ 49000</td>
            </tr>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                4
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/massachusetts-institute-of-technology-sloan" className="font-semibold text-primary-2">Massachusetts Institute of Technology (Sloan)</a>
                </td>
                <td className="px-2 py-4">Cambridge, Massachusetts</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">90.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '90%'}} />
                </div>
                </td>
                <td className="px-2 py-4">79.00 %</td>
                <td className="px-2 py-4">73.00 %</td>
                <td className="px-2 py-4">85.00 %</td>
                <td className="px-2 py-4">$ 42000</td>
            </tr>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                5
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/university-of-chicago-booth" className="font-semibold text-primary-2">University of Chicago (Booth)</a>
                </td>
                <td className="px-2 py-4">Chicago, Illinois</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">79.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '79%'}} />
                </div>
                </td>
                <td className="px-2 py-4">95.00 %</td>
                <td className="px-2 py-4">79.00 %</td>
                <td className="px-2 py-4">88.00 %</td>
                <td className="px-2 py-4">$ 81000</td>
            </tr>
            <tr className="text-center bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                6
                </th>
                <td className="px-2 py-4">
                <a href="https://mbaroles.com/universities/columbia-university" className="font-semibold text-primary-2">Columbia University</a>
                </td>
                <td className="px-2 py-4">New York City, New York</td>
                <td className="px-2 py-4">
                <div className="flex justify-center mb-1">
                    <span className="text-sm font-medium text-gray-600">85.00</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 rounded-full bg-primary-1" style={{width: '85%'}} />
                </div>
                </td>
                <td className="px-2 py-4">91.00 %</td>
                <td className="px-2 py-4">75.00 %</td>
                <td className="px-2 py-4">81.00 %</td>
                <td className="px-2 py-4">$ 85000</td>
            </tr>
            </tbody>
        </table>
        </div>
    </article>
    <div className="flex items-center justify-center">
        <a href="https://mbaroles.com/rankings/ranking-by-finance" className="my-4 px-6 md:px-8 py-2 bg-primary-2 text-[12px] md:text-sm !text-gray-50 rounded-md">View All Rankings
        </a>
    </div>
    </section>

    </>
  )
}

export default Employe