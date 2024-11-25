#ifndef LINEAR_EQUATION_CONVERTER_HPP
#define LINEAR_EQUATION_CONVERTER_HPP

#include <variant>
#include <array>
#include <cmath>

struct convertParams
{
    double k = 1;
    double m = 1;
    double n = 1;
    double a = 1;
    double b = 1;
    double c = 1;
};

class linearEquationConverter
{
public:
    static std::variant<std::array<double, 2>, std::array<double, 3>> convertLinearEquation(
        int funcTypeOne,
        int funcTypeTwo,
        convertParams converts);

private:
    static std::array<double, 3> expToImp(double k, double n);

    static std::array<double, 2> expToPcw(double k, double n);

    static std::array<double, 2> impToExp(double a, double b, double c);

    static std::array<double, 2> impToPcw(double a, double b, double c);

    static std::array<double, 2> pcwToExp(double m, double n);

    static std::array<double, 3> pcwToImp(double m, double n);

    static double gcd(double a, double b);

    static double lcm(double a, double b);
};

#endif