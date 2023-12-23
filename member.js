function skillsMember() {
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('member-skills');
    var memberSkillsClose = document.getElementById('member-skills-close');

    member.addEventListener('click', function() {
        memberSkills.style.display = 'block';
    });

    memberSkillsClose.addEventListener('click', function() {
        memberSkills.style.display = 'none';
    });
}