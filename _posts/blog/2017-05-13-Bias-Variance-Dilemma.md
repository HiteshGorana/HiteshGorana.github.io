[comment]: <> (---)

[comment]: <> (layout: post)

[comment]: <> (title: Understand Bias-Variance Dilemma with Intuition and Math)

[comment]: <> (excerpt: "Mathematical derivation of bias-variance relationship.")

[comment]: <> (modified: 2017-05-13T14:17:25-04:00)

[comment]: <> (categories: blog)

[comment]: <> (tags: [Machine Learning, Regression])

[comment]: <> (comments: true)

[comment]: <> (share: true)

[comment]: <> (---)

[comment]: <> (### Preface)

[comment]: <> (I was reading the book "Machine Learning - An Algorithmic Perspective" 2nd Ed by Stephen Marsland these days, and I came across the concept of "bias-variance dilemma" and its mathemical definition and derivations &#40;page 36&#41;. Loosely speaking, if a model has few parameters to fit, it tends to have high bias and low variance, and if a model has a lot of parameters to fit, it tends to have low bias but high variance. High bias means that the model is to simple to reflect the complex nature of the phenomenon. High variance means that the model is over complicated to generalize and the parameters fit were very sensitive to the training data used. In reality, because data have noise, people were not able to achieve both perfect low bias and low variance. So people have to trade off between them. That is to say, people have to choose the right model to fit the data. I knew this concept long time ago, mostly from the introductions of several MOOC courses. But I did not delve into its mathematics to fully understand how it works.)

[comment]: <> (<br />)

[comment]: <> (![]&#40;{{ site.url }}/images/blog/2017-05-13-Bias-Variance-Dilemma/BiasVariance_illustration.png&#41;)

[comment]: <> (<br />)

[comment]: <> (Unfortunately, although the book is overall a good book that covers most of fundamental knowledge of machine learning. It often has some minor mistakes in math. I also found there is mistakes in the derivation of the bias-variance relationship, and it is very confusing. So I tried to find these math on the world-wide web. Unfortunately, those materials are not perfect neither. Some of them looks good regarding the math, but they are too obscure and lack connectivity in the derivation from my point of view. Some of them provides good intuition and figures, but they are also having some math issues.)

[comment]: <> (### Reading Materials)

[comment]: <> (After doing multiple rounds of google searches, I think the combination of these two materials are the most easy to understand. I have annotated them in the pdf file for clarity. After reading both of them, I think you will fully understand what is bias and variance and their relashionships. This [stackflow answer]&#40;https://math.stackexchange.com/questions/1654230/confused-about-meaning-of-a-expectation-of-a-function&#41; might also be helpful if you have some troubles reading the derivation. I personally do not recommend the Wikipedia one by the way, though it seems to be correct.)

[comment]: <> (<br />)

[comment]: <> ([Material 1]&#40;{{ site.url }}/downloads/blog/2017-05-13-Bias-Variance-Dilemma/BiasVariance_1.pdf&#41;)

[comment]: <> (<br />)

[comment]: <> (It provides the figures to illustarte the origin of bias and variance, which other materials often lack. The derivation seems ok. However, it lacks one key clarification for the uncorrelatonship between two things therefore is not recommended as the rigorous derivation.)

[comment]: <> (<br />)

[comment]: <> ([Material 2]&#40;{{ site.url }}/downloads/blog/2017-05-13-Bias-Variance-Dilemma/BiasVariance_2.pdf&#41;)

[comment]: <> (<br />)

[comment]: <> (It provides very detailed derivation step by step. Despite the minor math errors, it is the best one I have seen on the internet. I have already annotated the minor error and some basic statistics lemma/theorems if you cannot remember from the top of your head.)
