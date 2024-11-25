#ifndef EVALUATOR_HPP
#define EVALUATOR_HPP

#include <sstream>
#include <string>
#include <array>
#include <cmath>
#include <cctype>
#include <stdexcept>

class Evaluator
{
public:
    static float eval(const std::string &expression);

    static void sortedEval(float evalP, std::array<int, 5> &buffer);

private:
    static float parseExpression(std::istringstream &stream);

    static float parseTerm(std::istringstream &stream);

    static float parseFactor(std::istringstream &stream);

    static std::string removeSpaces(const std::string &str);
};

#endif