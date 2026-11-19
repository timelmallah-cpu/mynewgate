# Switzerland: English-taught master's at the two federal institutes of technology, ETH Zurich and EPFL.
# Since autumn 2025 students who move to Switzerland to study pay CHF 2,190 per semester (three times the Swiss rate).
# Fees are in CHF and converted at CHF_PER_EUR (also in scripts/build-data.mjs). Sources: official pages, checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

CHF_PER_EUR = 0.92
MA = []
MSC = ("ماجستير", "Master's degree")
Y2 = ("سنتان تقريباً (120 ساعة معتمدة، وبعض البرامج 90)", "About 2 years (120 credits; some programmes 90)")
FEE = (f"2,190 فرنك سويسري للفصل للطلاب القادمين من الخارج (حوالي {round(2190 / CHF_PER_EUR / 10) * 10:,} يورو)، أي ثلاثة أضعاف رسوم السويسريين منذ خريف 2025",
       f"CHF 2,190 per semester for students who move to Switzerland to study (about €{round(2190 / CHF_PER_EUR / 10) * 10:,}), three times the Swiss rate since autumn 2025")
LIVING = ("يحدده الكانتون؛ مثلاً جامعة برن تذكر 1,500 فرنك سويسري شهرياً على الأقل لإثبات القدرة المالية، والمعيشة في زيورخ ولوزان أغلى (للتحقق مع مكتب الهجرة في الكانتون)",
          "Set by the canton; for example the University of Bern cites at least CHF 1,500 a month as proof of funds, and Zurich and Lausanne cost more (check with the cantonal migration office)")

# ETH Zurich: one application window for bachelor's degrees from outside Switzerland.
ETH_DL = ("لدفعة سبتمبر 2027: التقديم من 1 نوفمبر حتى 30 نوفمبر 2026 (الساعة 11:59 صباحاً بتوقيت وسط أوروبا) لكل من معه بكالوريوس من خارج سويسرا، ولا توجد نافذة ثانية لهم",
          "September 2027 intake: apply 1 November - 30 November 2026 (11:59 CET) if your bachelor's is from outside Switzerland; there is no second window for these applicants")
ETH_EN = ("مستوى C1 في الإنجليزية بشهادة من قائمة الجامعة المعتمدة (عمرها أقل من سنتين)، ومن درس البكالوريوس كله بالإنجليزية يقدّم إثباتاً رسمياً من جامعته",
          "English at C1 with a certificate from the university's recognised list (under two years old); applicants whose whole bachelor's was taught in English submit official confirmation from their university")
ETH_OTHER = ("القبول تنافسي جداً ومبني على ملف البكالوريوس ومدى قربه من البرنامج، مع خطاب دافع (صفحة تقريباً) بلغة البرنامج. رسوم التقديم 150 فرنك لكل برنامج، غير مستردة",
             "Admission is highly selective, based on your bachelor's record and how closely it matches the programme, with a motivation letter (about one page) in the programme's language. The application fee is CHF 150 per programme and non-refundable")
ETH_HOW = ("التقديم أونلاين على بوابة eApply", "Apply online on the eApply portal")
for name, field, url in [("Computer Science MSc", "cs", "https://ethz.ch/en/studies/master/application/master-informatik.html"),
                         ("Data Science MSc", "ds", "https://ethz.ch/en/studies/master/application/master-datascience.html"),
                         ("Cyber Security MSc (joint degree ETH Zurich and EPFL)", "cs", "https://ethz.ch/en/studies/master/application/master-cybsec.html"),
                         ("Computational Science and Engineering MSc", "eng", "https://ethz.ch/en/studies/master/application/master-rw.html")]:
    add(MA, field, name, "ETH Zurich", "Zürich", MSC, Y2, FEE, NP, ETH_DL, ETH_EN, ETH_OTHER, ETH_HOW, LIVING, NP, url,
        "https://ethz.ch/en/studies/registration-application/master/application/how-to-apply/application-schedule.html")

# EPFL (Lausanne): two rounds; applicants who need a visa should use the first.
EPFL_DL = ("لدفعة سبتمبر 2027: الجولة الأولى حتى 15 ديسمبر 2026، والثانية حتى 31 مارس 2027. من يحتاج تأشيرة يقدّم في الجولة الأولى، وهي أيضاً شرط للتنافس على منحة التميز",
           "September 2027 intake: round 1 closes 15 December 2026 and round 2 closes 31 March 2027. Applicants who need a visa should use round 1, which is also required for the Excellence Fellowship")
EPFL_EN = ("الجامعة توصي بمستوى C1 في الإنجليزية لبرامج الماجستير (يعادل IELTS 7.0 حسب جدول مركز اللغات في الجامعة)؛ الشرط الدقيق في صفحة البرنامج",
           "EPFL recommends English at C1 for master's programmes (IELTS 7.0 in the university language centre's table); the exact requirement is on the programme page")
EPFL_OTHER = ("رسوم التقديم 150 فرنك لمن معه بكالوريوس من خارج سويسرا، ورسوم إضافية 50 فرنك كل فصل. منحة التميز (Excellence Fellowship) تعطي 10,000 فرنك للفصل لعدد محدود ولا تغطي الرسوم الدراسية؛ ضع علامة عليها في طلب التقديم",
              "The application fee is CHF 150 for bachelor's degrees from outside Switzerland, plus CHF 50 in other charges each semester. The Excellence Fellowship pays CHF 10,000 per semester to a limited number and does not cover tuition; tick it on the application form")
EPFL_HOW = ("التقديم أونلاين على نموذج الماجستير في موقع EPFL", "Apply online with EPFL's master's application form")
EPFL_SRC = "https://www.epfl.ch/education/master/how-to-apply/"
for name, field in [("Master in Computer Science", "cs"), ("Master in Data Science", "ds"), ("Master in Financial Engineering", "econ"),
                    ("Master in Management, Technology and Entrepreneurship", "bus"), ("Master in Energy Science and Technology", "eng"),
                    ("Master in Robotics", "eng"), ("Master in Communication Systems", "cs")]:
    add(MA, field, name, "EPFL (École polytechnique fédérale de Lausanne)", "Lausanne", MSC, Y2, FEE, NP, EPFL_DL, EPFL_EN, EPFL_OTHER, EPFL_HOW,
        LIVING, NP, EPFL_SRC, EPFL_SRC)

write("سويسرا", "Switzerland", "switzerland", MA, level="master")
append_master("سويسرا", "switzerland")
