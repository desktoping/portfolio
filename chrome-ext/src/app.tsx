import { useEffect, useState } from "preact/hooks";

type Conversion = {
  data: {
    USD: string;
    PHP: string;
  };
};

const useGetForexRate = () => {
  const [conversion, setConversion] = useState<Conversion | null>(null);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversion = async () => {
      const cacheKey = new Date().toLocaleDateString();

      if (localStorage.getItem(cacheKey)?.length) {
        setConversion(JSON.parse(localStorage.getItem(cacheKey) ?? "{}"));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_tj3mkGbWqt430JRE8Hdd6UkWQmmiTY2KID1uyWDk"
        );

        if (!response.ok) {
          throw new Error("Response is not ok");
        }

        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setConversion(data);
      } catch (error) {
        setError("An error ocurred while fetching articles");
      } finally {
        setLoading(false);
      }
    };

    fetchConversion();
  }, []);

  return { conversion, error, isLoading };
};

export const App = () => {
  const { conversion, error, isLoading } = useGetForexRate();
  const [currency, setCurrency] = useState("PHP");

  const [yearly, setYearly] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [weekly, setWeekly] = useState(0);
  const [daily, setDaily] = useState(0);
  const [hourly, setHourly] = useState(0);

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;

    if (isNaN(+value) || value != +value) {
      value = value
        .split("")
        .filter((c: string) => /\d/.test(c))
        .join("");
    }

    switch (name) {
      case "yearly": {
        setYearly(value);
        setMonthly(value / 12);
        setWeekly(value / 48);
        setDaily(value / 240);
        setHourly(value / 1920);
        break;
      }

      case "monthly": {
        setYearly(value * 12);
        setMonthly(value);
        setWeekly(value / 4);
        setDaily(value / 20);
        setHourly(value / 160);
        break;
      }

      case "weekly": {
        setYearly(value * 48);
        setMonthly(value * 4);
        setWeekly(value);
        setDaily(value / 5);
        setHourly(value / 40);
        break;
      }

      case "daily": {
        setYearly(value * 240);
        setMonthly(value * 20);
        setWeekly(value * 5);
        setDaily(value);
        setHourly(value / 8);
        break;
      }

      case "hourly": {
        setYearly(value * 1920);
        setMonthly(value * 160);
        setWeekly(value * 40);
        setDaily(value * 8);
        setHourly(value);
        break;
      }

      default:
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner">
          <span className="spinner__circle" />
          <span>Please wait...</span>
        </div>
      ) : error ? (
        <span className="error">{error}</span>
      ) : (
        <div style={{ width: 500, height: 500 }} className="input-container">
          <h1 className="title">Salary calculator</h1>
          <h3>
            Assumes 8 hours per day, 5 days a week, 4 weeks a month and 12
            months a year
          </h3>

          <div className="input">
            <span>Convert to {currency === "USD" ? "PHP" : "USD"}?</span>
            <input
              type="checkbox"
              onChange={(e: any) => {
                const conversionRate = conversion?.data.PHP ?? 1;
                const operator = e.target?.checked ? "*" : "/";
                const operatorFn = {
                  "/": (a: number, b: number) => a * b,
                  "*": (a: number, b: number) => a / b,
                };

                handleChange({
                  target: {
                    name: "yearly",
                    value: operatorFn[operator](yearly, +conversionRate),
                  },
                });
                setCurrency(e.target?.checked ? "USD" : "PHP");
              }}
            />
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Yearly"
              name="yearly"
              value={Number(yearly).toLocaleString("en")}
              onChange={handleChange}
            />
            {currency} / YR
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Monthly"
              value={Number(monthly).toLocaleString("en")}
              onChange={handleChange}
              name="monthly"
            />
            {currency} / MO
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Weekly"
              value={Number(weekly).toLocaleString("en")}
              onChange={handleChange}
              name="weekly"
            />
            {currency} / WK
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Daily"
              value={Number(daily).toLocaleString("en")}
              onChange={handleChange}
              name="daily"
            />
            {currency} / DAY
          </div>

          <div className="input">
            <input
              type="text"
              placeholder="Hourly"
              value={Number(hourly).toLocaleString("en")}
              onChange={handleChange}
              name="hourly"
            />
            {currency} / HR
          </div>
        </div>
      )}
    </div>
  );
};
