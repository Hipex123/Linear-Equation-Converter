#include "../Includes/linearEquationConverter.hpp"

std::variant<std::array<double, 2>, std::array<double, 3>> linearEquationConverter::convertLinearEquation(int funcTypeOne,
                                                                                                          int funcTypeTwo,
                                                                                                          convertParams converts)
{
    if (funcTypeOne == 1 && funcTypeTwo == 2)
    {
        return expToImp(converts.k, converts.n);
    }
    else if (funcTypeOne == 1 && funcTypeTwo == 3)
    {
        return expToPcw(converts.k, converts.n);
    }

    else if (funcTypeOne == 2 && funcTypeTwo == 1)
    {
        return impToExp(converts.a, converts.b, converts.c);
    }
    else if (funcTypeOne == 2 && funcTypeTwo == 3)
    {
        return impToPcw(converts.a, converts.b, converts.c);
    }

    else if (funcTypeOne == 3 && funcTypeTwo == 1)
    {
        return pcwToExp(converts.m, converts.n);
    }
    else if (funcTypeOne == 3 && funcTypeTwo == 2)
    {
        return pcwToImp(converts.m, converts.n);
    }
    else
    {
        return {};
    }
}

std::array<double, 3> linearEquationConverter::expToImp(double k, double n)
{
    return {-k, 1, -n};
}

std::array<double, 2> linearEquationConverter::expToPcw(double k, double n)
{
    return {n / (-k), n};
}

std::array<double, 2> linearEquationConverter::impToExp(double a, double b, double c)
{
    return {-(a / b), -(c / b)};
}

std::array<double, 2> linearEquationConverter::impToPcw(double a, double b, double c)
{
    return {-(c / a), -(c / b)};
}

std::array<double, 2> linearEquationConverter::pcwToExp(double m, double n)
{
    return {-((lcm(m, n) / m) / (lcm(m, n) / n)), lcm(m, n) / (lcm(m, n) / n)};
}

std::array<double, 3> linearEquationConverter::pcwToImp(double m, double n)
{
    return {lcm(m, n) / m, lcm(m, n) / n, -lcm(m, n)};
}

double linearEquationConverter::gcd(double a, double b)
{
    while (b != 0)
    {
        int temp = b;
        b = std::fmod(a, b);
        a = temp;
    }
    return a;
}

double linearEquationConverter::lcm(double a, double b)
{
    return std::abs(a * b) / gcd(a, b);
}