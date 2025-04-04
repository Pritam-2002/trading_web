"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, ChevronRight, Clock, Code2, Globe, LineChart, Lock, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span>TradePro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            {/* <Link href="#" className="text-sm font-medium hover:text-primary">
              Features
            </Link> */}

            <Link href="https://docs.google.com/document/d/17nNOmAHACi07pvzpRl-2eDXqkxb-_WaFEwSN4OXVVko/edit?usp=sharing" className="text-sm font-medium hover:text-primary bg-slate-500 rounded-lg p-3">
              Documentation
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:text-primary">
              Students saying
            </Link> */}
          </nav>
          {/* <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary hidden md:block">
              Sign In
            </Link>
            <Button>Get Started</Button>
          </div> */}
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Trading Practice & Learning Platform.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Real-time data, powerful charts, and advanced analytics to help you make better trading Practice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    onClick={() => window.open("https://wa.me/9073217050?text=Hello, I want to enroll.", "_blank")}
                  >
                    Contact now to enroll
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Trading platform dashboard"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need for Learning Trade
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines powerful tools with an intuitive interface to give you the edge in any market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <LineChart className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced Charts</h3>
                  <p className="text-muted-foreground">
                    Multiple chart types with over 100 indicators and drawing tools for technical analysis.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Zap className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Data</h3>
                  <p className="text-muted-foreground">
                    Lightning-fast market data with millisecond updates across all global markets.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Globe className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Global Markets</h3>
                  <p className="text-muted-foreground">
                    Access to stocks, forex, cryptocurrencies, commodities, and more from a single platform.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Code2 className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Trading API</h3>
                  <p className="text-muted-foreground">
                    Build custom indicators and automated trading strategies with our powerful API.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Clock className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Historical Data</h3>
                  <p className="text-muted-foreground">
                    Access decades of historical data for backtesting and strategy development.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <Lock className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure Trading</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade security with two-factor authentication and encrypted connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Choose the plan that's right for you
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From casual traders to professional institutions, we have a plan to suit your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For casual traders and beginners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Basic charting tools
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Delayed market data
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Limited indicators
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Community support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For active traders and professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$29</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Advanced charting tools
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Real-time market data
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      100+ indicators
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Trading alerts
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For institutions and trading firms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$99</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      All Pro features
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      API access
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Custom indicators
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      Dedicated support
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                      White-label options
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Students worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our Students have to say about their experience with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    {/* <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="User avatar"
                      className="rounded-full h-12 w-12 object-cover"
                    /> */}
                    <div>
                      <h3 className="font-bold">Pritam Mukherjee</h3>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The charting tools and real-time data have completely transformed my trading strategy. I can't
                    imagine trading without TradePro now."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    {/* <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="User avatar"
                      className="rounded-full h-12 w-12 object-cover"
                    /> */}
                    <div>
                      <h3 className="font-bold">Farhan </h3>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The API integration allows us to build custom solutions for our Trades. The data quality and
                    reliability are unmatched in the industry."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">

                    <div>
                      <h3 className="font-bold">Moumita Singh</h3>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "As someone who started learning to trade now, having everything in one platform has saved me
                    countless hours and improved my Learning."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to elevate your trading?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Our Course who have already made the switch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">

                <Button size="lg" variant="secondary" onClick={() => window.open("https://wa.me/9073217050?text=Hello, I want to enroll.", "_blank")}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span>TradePro</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 TradePro. All rights reserved.
          </p>
          <div className="flex items-center gap-4">

            <Link href="#" className="text-sm font-medium hover:text-primary" >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

